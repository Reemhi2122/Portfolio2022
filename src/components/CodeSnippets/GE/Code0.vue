<template>#include "world/CombatSystem.h"

#include "audio/AudioSystem.h"
#include "core/ResourceManager.h"
#include &lt;core/Engine.h>

namespace gudenuff {
    const float CombatVolume = 0.5f;
    const float NonCombatVolume = 0.0f;
    const float AUDIO_STEP = 0.01f;

    CombatSystem::CombatSystem(int a_Priority) : BaseSystem(a_Priority)
    {
    }

    CombatSystem::~CombatSystem()
    {
        m_MapData = nullptr;
        m_Room = nullptr;
    }

    void CombatSystem::InitCombatSystem(MapData* a_Mapdata)
    {
        m_MapData = a_Mapdata;

        Hash itemsHash = GetHash("Items.png");
        std::shared_ptr&lt;SpriteSheet> itemSpriteSheet = ECS.GetSystem&lt;ResourceManager>().GetSpriteSheet(itemsHash);

        m_SummuningSmoke.ParticleSprite = Sprite(itemSpriteSheet, glm::uvec2(4, 1));
        m_SummuningSmoke.ColorBegin = glm::vec4(1.0f);
        m_SummuningSmoke.ColorEnd = glm::vec4(1.0f, 1.0f, 1.0f, 0.0f);
        m_SummuningSmoke.BaseRotation = 0.0f, m_SummuningSmoke.BaseRotationVariation = 20.0f;
        m_SummuningSmoke.SizeBegin = 0.5f, m_SummuningSmoke.SizeVariation = 0.1f, m_SummuningSmoke.SizeEnd = 1.5f;
        m_SummuningSmoke.LifeTime = 1.5f;
        m_SummuningSmoke.VelocityRandomDirectionX = true;
        m_SummuningSmoke.VelocityRandomDirectionY = false;
        m_SummuningSmoke.Position = { 0.0f, 0.0f };
        m_SummuningSmoke.PositionVariation = { 25.0f, 25.0f };
        m_SummuningSmoke.NumParticlesEmit = 30;

        auto& aSys = ECS.GetSystem&lt;AudioSystem>();
        aSys.GetLayer(1).m_SoundtrackModifier = NonCombatVolume;
    }

    void CombatSystem::Update(float deltaTime)
    {
        if (m_MapData == nullptr) return;
        if (engine.m_State != GAMEPLAY_STATE) return;

        unsigned int playerPosx, playerPosY;
        ECS.GetSystem&lt;CollisionSystem>().GetCompPos(Player, playerPosx, playerPosY);

        auto& levelGen = ECS.GetSystem&lt;LevelGenerator>();
        auto& levelMan = ECS.GetSystem&lt;LevelManager>();
        auto& particleSystem = ECS.GetSystem&lt;ParticleSystem>();
        auto& gridMap = levelMan.GetGridMap();

        TransformSystem transformSystem = ECS.GetSystem&lt;TransformSystem>();

        auto& aSys = ECS.GetSystem&lt;AudioSystem>();

        if (!m_InCombat) {
            if (aSys.GetLayersSize() > 1)
                aSys.GetLayer(1).m_SoundtrackModifier = NonCombatVolume;
            for (RoomNew& room : m_MapData->m_Rooms)
            {
                if (room.m_State == e_UseState::MAIN) {
                    if (playerPosx >= room.m_Position.x && playerPosx &lt; room.m_Position.x + room.m_Size.x &&
                        playerPosY >= room.m_Position.y && playerPosY &lt; room.m_Position.y + room.m_Size.y) {
                        if (room.m_Enemies.size() > 0) {
                            for (int i = 0; i &lt; room.m_Entrances.size(); i++)
                            {									
                                glm::ivec2 pos;
                                pos.x = room.m_Position.x + room.m_Entrances[i].x;
                                pos.y = room.m_Position.y + room.m_Entrances[i].y;

                                CellData& doorLoc = gridMap.map[pos.x + m_MapSize * pos.y];
                                doorLoc.tag = GridMap::Door;
                            }

                            for (size_t x = 0; x &lt; room.m_Enemies.size(); x++)
                            {
                                auto enemyFile = m_EnemiesString[rand() % m_EnemiesString.size()].c_str();
                                m_EnemyFiles.push_back(enemyFile);

                                switch (GetHash(enemyFile))
                                {
                                case GetHash("presets/Enemy/PatternEnemy_01.preset"):
                                case GetHash("presets/Enemy/PatternEnemy_02.preset"):
                                case GetHash("presets/Enemy/PatternEnemy_03.preset"):
                                    m_SummuningSmoke.ColorBegin = { 0.78f, 0.47f, 0.15f, 1 };
                                    m_SummuningSmoke.ColorEnd = { 0.78f, 0.47f, 0.15f, 1 };
                                    break;

                                case GetHash("presets/Enemy/ChaseEnemy_01.preset"):
                                case GetHash("presets/Enemy/ChaseEnemy_02.preset"):
                                    m_SummuningSmoke.ColorBegin = { 0.0f, 0.8f, 0.4f, 1 };
                                    m_SummuningSmoke.ColorEnd = { 0.0f, 0.8f, 0.4f, 1 };
                                    break;

                                case GetHash("presets/Enemy/ZoneAttackEnemy_01.preset"):
                                case GetHash("presets/Enemy/ZoneAttackEnemy_02.preset"):
                                    m_SummuningSmoke.ColorBegin = { 0.78f, 0.08f, 0.52f, 1 };
                                    m_SummuningSmoke.ColorEnd = { 0.78f, 0.08f, 0.52f, 1 };
                                    break;
                                }

                                CellData& spawnPos = gridMap.map[room.m_Enemies[x].x + m_MapSize * room.m_Enemies[x].y];
                                spawnPos.tag = GridMap::Unwalkable;

                                glm::vec2 gridWordPos;
                                gridMap.GetTileWorldPosition(gridWordPos.x, gridWordPos.y, room.m_Enemies[x].x + m_MapSize * room.m_Enemies[x].y);
                                m_SummuningSmoke.Position = gridWordPos;
                                particleSystem.Emit(m_SummuningSmoke);
                            }

                            m_Room = &#38;room;
                            m_InCombat = true;
                            m_TimeElapsed = 0.0f;
                        }
                    }
                }
            }
        }
        else {
            if (m_EnemiesSpawned == false) {
                if (m_TimeElapsed > m_SpawnTime) {
                    ECS.GetSystem&lt;AudioSystem>().GetComponent(Player).Play(GetHash("gong.wav"));
                    m_EnemiesSpawned = true;
                    for (size_t x = 0; x &lt; m_Room->m_Enemies.size(); x++)
                    {
                        EntityID enemy = CreatePresetEntity(m_EnemyFiles[x], glm::vec2(m_Room->m_Enemies[x].x, m_Room->m_Enemies[x].y), false);
                        levelGen.m_Entities.push_back(enemy);
                        m_Enemies.push_back(enemy);

                        CellData& spawnPos = gridMap.map[m_Room->m_Enemies[x].x + m_MapSize * m_Room->m_Enemies[x].y];
                        spawnPos.fog = 0;
                        spawnPos.tag = GridMap::Empty | GridMap::Entity;
                    }

                    m_EnemyFiles.clear();
                }

                m_TimeElapsed += deltaTime;
                return;
            }

            if (aSys.GetLayersSize() > 1)
                aSys.GetLayer(1).m_SoundtrackModifier = CombatVolume;
            if (EnemiesDead(*m_Room))
            {
                m_Room->m_Enemies.clear();
                m_Enemies.clear();
                m_InCombat = false;
                m_EnemiesSpawned = false;

                for (auto& m_Entrance : m_Room->m_Entrances)
                {
                    glm::ivec2 pos;
                    pos.x = m_Room->m_Position.x + m_Entrance.x;
                    pos.y = m_Room->m_Position.y + m_Entrance.y;

                    gridMap.map[pos.x + m_MapSize * pos.y].tag = GridMap::Empty;
                }
            }
        }
    }

    bool CombatSystem::InCombat() const
    {
        return m_InCombat;
    }

    void CombatSystem::ResetCombat()
    {
        m_InCombat = false;
        m_EnemiesSpawned = false;
        m_TimeElapsed = 0.0f;
        m_Enemies.clear();
    }

    bool CombatSystem::EnemiesDead(RoomNew& a_Room)
    {
        bool finished = true;

        for (EntityID id : m_Enemies)
        {
            if (!ECS.GetSystem&lt;LifeSystem>().IsDead(id)) {
                finished = false;
            }
        }
        return finished;
    }
}</template>