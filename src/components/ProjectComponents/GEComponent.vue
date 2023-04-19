<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Gudenuff Engine - Setsuko</h1>
                    <h2 class="header-subtitle">Game created in custom engine</h2>
                </div>
            </div>

            <video class="project-video" poster="../../assets/Image/Portfolio/GE/GEHeader.jpg" controls>
                <source src="/src/assets/Image/Portfolio/GE/GETrailer.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div class="indv-project-bubbles-container">
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Generalist programmer
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">code</span> C++
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">build</span> Custom Engine
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">group</span>12 members
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 8 weeks
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2022
                </div>
            </div>
        </div>

        <CarrouselComp :cards="this.images" class="carousel-comp"/>

        <p class="project-text">
            Drums of Harmony is a 2D rhythm-based roguelike, where you as a spirit bard are trying 
            to cleanse evil Yokai in order to save your village from mysterious creatures.
            Play as a spirit bard that can move, 
            shoot and collect to deal with enemies and clear rooms, levels, and zones...
        </p>

        <iframe class="itchio" frameborder="0" src="https://itch.io/embed/1572705?linkback=true" width="552" height="167"><a href="https://buas.itch.io/gudenuff-drumsofharmony">
            Setsuko: Drums of Harmony by Breda University of Applied Sciences, Piinda, Clockweiz, lamci, Reemhi, Marivahlio, NeoSup, lyubomir_kostadinov, Alucard</a>
        </iframe>
        
        <section class="software-skills">
            <h2 class="section-header">Software skills improved this project</h2>
            <div class="software-skills-icons">
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" />
                    <p class="software-skill-title"> Language </p>
                    <p class="software-skill-text"> C++ </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="/src/assets/Image/Portfolio/GE/Engine_Logo.png" title="GE Engine" />
                    <p class="software-skill-title"> Engine </p>
                    <p class="software-skill-text"> GE Engine </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" title="Jira" />
                    <p class="software-skill-title"> Planning </p>
                    <p class="software-skill-text"> Jira </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="/src/assets/Image/Logos/Perforce.png" title="Perforce" />
                    <p class="software-skill-title"> Source control </p>
                    <p class="software-skill-text"> Perforce </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" title="Windows" />
                    <p class="software-skill-title"> Platform </p>
                    <p class="software-skill-text"> Windows </p>
                </div>
            </div>
        </section>

        <section class="contribution-section">
            <h2 class="section-header">What I contributed to the project</h2>
            <div class="contribution-element-container">
                <div class="contribution-element">
                    <p class="contribution-element-title">Combat System</p>
                    <ExpandableImage class="contribution-image"
                        :src="this.contributionImages[0]"/>
                    <p class="contribution-text">
                        When the player walks inside a room that is defined by a door 
                        and an enclosed area with trees. We wanted the player to enter 
                        a combat state. In this state, the doors would close with fire 
                        blocking their way out. And The player would enter a state where it 
                        can only move or attack on the beat visualized by a beat matcher 
                        spawned at the same time. The tricky part was to check if the 
                        player entered the room. Once all the enemies were killed, the 
                        room would open up again.
                    </p>
                    <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState[0]}">
<code class="language-csharp">#include "world/CombatSystem.h"

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
}
</code>
                    </pre>
                    <div class="code-snippet-button-container">
                        <button type="button" @click="ToggleCodeSnippet(0)" class="code-snippet-button">Toggle Snippet</button>
                        <!-- <a href="https://github.com/kyliandekker/in-sheeps-clothing/blob/main/Assets/Scripts/Sheep/PeekSheep.cs" class="code-snippet-button" target="_blank">View on github</a> -->
                    </div>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Enemy spawning</p>
                    <ExpandableImage class="contribution-image"
                        :src="this.contributionImages[1]"/>
                    <p class="contribution-text">
                        I was responsible for the spawning of all the enemies once the player enters 
                        the room. This was part of the combat system but used different systems. 
                        We had a tools programmer who made a map generation tool where I had to 
                        read out the enemy's locations and spawn the enemies at the correct location. 
                        Also keeping track of if they are alive to then open the room.
                    </p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Weapon creation tool</p>
                    <ExpandableImage class="contribution-image"
                        :src="this.contributionImages[2]"/>
                    <p class="contribution-text">
                        We wanted a dynamic way of adjusting weapons in the game. For this, I made 
                        an editor for the engine to create multiple weapons fast. Sadly, this got 
                        discontinued because we wanted to simplify the weapon system to get it done 
                        in time. But I learned a lot from this experience, I created this in the first 
                        1/2 weeks and learned how to quickly get to know a new code base like a custom engine. 
                    </p>
                    <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState[2]}">
<code class="language-csharp">#include "tools/WeaponCreationTool.h"
#include &lt;tools/JsonWrapper.h>

namespace gudenuff {

	WeaponCreationTool::WeaponCreationTool() : ToolWindow(0, "Weapon Tool Creation", "")
	{
		LoadWeapons(); //Implementation needs to be added

		m_Weapons = std::vector&lt;CreationWeapon>();
		m_Weapons.push_back(CreationWeapon());
		m_EditableWeapon = &m_Weapons[0];
	}

	WeaponCreationTool::~WeaponCreationTool() {
		m_EditableWeapon = nullptr;
	}

	void WeaponCreationTool::Render()
	{
		if (ImGui::BeginCombo("##combo", m_EditableWeapon->name))
		{
			for (int n = 0; n &lt; m_Weapons.size(); n++)
			{
				bool is_selected = (*m_EditableWeapon == m_Weapons[n]);
				if (ImGui::Selectable(m_Weapons[n].name, is_selected))
					m_EditableWeapon = &m_Weapons[n];
				if (is_selected)
					ImGui::SetItemDefaultFocus();
			}
			ImGui::EndCombo();
		}

		ImGui::Text("Weapon name:\n");
		ImGui::InputText("##", m_EditableWeapon->name, IM_ARRAYSIZE(m_EditableWeapon->name));

		ImGui::Spacing();

		ImGui::Text("Weapon settings:\n");
		ImGui::Text("Damage");
		ImGui::InputFloat("##RateOfFire", &m_EditableWeapon->damage);

		ImGui::Text("Range");
		ImGui::InputFloat("##Range", &m_EditableWeapon->range);

		ImGui::Text("Projectile Speed");
		ImGui::SliderFloat("##ProjectileSpeed", &m_EditableWeapon->projectileSpeed, 0.f, 1.f);

		ImGui::Text("Projectile Spread");
		ImGui::SliderFloat("##ProjectileSpread", &m_EditableWeapon->projectileSpread, 1.f, 180.f);

		ImGui::Text("Projectile Count");
		ImGui::InputInt("##ProjectileCount", &m_EditableWeapon->projectileCount);

		CreateBeatPatternMenu();

		if (ImGui::Button("New")) {
			m_Weapons.push_back(CreationWeapon());
			m_EditableWeapon = &m_Weapons[m_Weapons.size() - 1];
		}

		ImGui::SameLine();
		if (ImGui::Button("Save")) {
			SaveWeapons();
		}

		m_DrawPos = ImGui::GetCursorPos();
		m_InitialBulletPos = ImVec2(
			ImGui::GetCursorPos().x + m_BulletOffset.x,
			ImGui::GetCursorPos().y + m_BulletOffset.y);

		CreateProjectileExampleWindow();
		CreateBezierCurveWindow();
	}

	void WeaponCreationTool::CreateBeatPatternMenu() {
		ImVec4 activeCol = ImGui::GetStyle().Colors[ImGuiCol_SliderGrab];
		ImVec4 inActiveCol = ImGui::GetStyle().Colors[ImGuiCol_FrameBg];
		
		ImGui::Text("Beat");
		ImGui::NewLine();
		for (size_t i = 0; i &lt; m_EditableWeapon->beatPattern.size(); i++)
		{
			if (m_EditableWeapon->beatPattern[i])
				ImGui::PushStyleColor(ImGuiCol_Button, activeCol);
			else
				ImGui::PushStyleColor(ImGuiCol_Button, inActiveCol);

			std::string buttonName = "##Beat" + std::to_string(i);
			if (i > 0 && i % m_BeatPatternSize == 0) ImGui::NewLine();
			ImGui::SameLine(m_BeatPatternOffset + (i % m_BeatPatternSize) * m_StepSizeButtonOffset);
			if (ImGui::Button(buttonName.c_str(), ImVec2(m_StepSizeButtonSize, m_StepSizeButtonSize)))
				m_EditableWeapon->beatPattern[i] = m_EditableWeapon->beatPattern[i] ? 0 : 1;

			ImGui::PopStyleColor();
		}

		if (ImGui::Button("-")) {
			if (m_EditableWeapon->beatPattern.size() > m_BeatPatternSize)
				m_EditableWeapon->beatPattern.resize(m_EditableWeapon->beatPattern.size() - m_BeatPatternSize);
		}

		ImGui::SameLine();
		if (ImGui::Button("+")) {
			for (size_t i = 0; i &lt; m_BeatPatternSize; i++)
				m_EditableWeapon->beatPattern.push_back(0);
		}
	}

	void WeaponCreationTool::CreateProjectileExampleWindow()
	{
		ImDrawList* DrawList = ImGui::GetWindowDrawList();
		ImVec2 pos = ImGui::GetWindowPos();

		DrawList->AddRectFilled(
			ImVec2(pos.x + m_DrawPos.x, pos.y + m_DrawPos.y),
			ImVec2(pos.x + m_DrawPos.x + m_BackGroundSize,
				pos.y + m_DrawPos.y + m_BackGroundSize),
				m_BackgorundColor);

		UpdateExampleBulletPosition();
		ImVec2 bulletPos = ImVec2(m_InitialBulletPos.x + m_BulletPos.x, m_InitialBulletPos.y + m_BulletPos.y);
		DrawList->AddRectFilled(	
			ImVec2(pos.x + bulletPos.x, pos.y + bulletPos.y),
			ImVec2(pos.x + bulletPos.x + m_BulletSize, pos.y + bulletPos.y + m_BulletSize),
			m_BulletColor);
	}

	void WeaponCreationTool::UpdateExampleBulletPosition()
	{
		ImVec2 dir = ImVec2(
			m_BulletPos.y -= 1.0f * m_EditableWeapon->projectileSpeed,
			m_BulletPos.x -= 0.f * m_EditableWeapon->projectileSpeed);

		{
			float halfBackgroundSize = m_BackGroundSize / 2;
			float halfBulletSize = m_BulletSize / 2;

			if (m_BulletPos.y + halfBulletSize > m_EditableWeapon->range ||
				m_BulletPos.y - halfBulletSize &lt; -m_EditableWeapon->range)
				ResetBullet();

			if (m_BulletPos.x + halfBulletSize > m_EditableWeapon->range ||
				m_BulletPos.x - halfBulletSize &lt; -m_EditableWeapon->range)
				ResetBullet();
		}
	}

	void WeaponCreationTool::CreateBezierCurveWindow()
	{
		ImDrawList* DrawList = ImGui::GetWindowDrawList();
		ImVec2 pos = ImGui::GetWindowPos();

		ImVec2 topLeftCorner = ImVec2(pos.x + m_DrawPos.x + m_BezierCurveBGOffset.x, pos.y + m_DrawPos.y + m_BezierCurveBGOffset.y);
		ImVec2 bottomRightCorner = ImVec2(pos.x + m_DrawPos.x + m_BezierCurveBGOffset.x + m_BackGroundSize, pos.y + m_DrawPos.y + m_BezierCurveBGOffset.y + m_BackGroundSize);
		ImVec2 BottomLeftCorner = ImVec2(topLeftCorner.x, topLeftCorner.y + m_BackGroundSize);
		ImVec2 TopRightCorner = ImVec2(bottomRightCorner.x, bottomRightCorner.y - m_BackGroundSize);

		DrawList->AddRectFilled(
			topLeftCorner,
			bottomRightCorner,
			m_BackgorundColor);

		DrawList->AddLine(
			BottomLeftCorner,
			TopRightCorner,
			m_BulletColor);



		DrawList->AddBezierCubic(BottomLeftCorner, topLeftCorner, bottomRightCorner, TopRightCorner, m_BulletColor, 1.f);
	}

	int getPt(int n1, int n2, float perc)
	{
		int diff = n2 - n1;

		return n1 + (diff * perc);
	}

	void WeaponCreationTool::ResetBullet()
	{
		m_BulletPos.x = 0;
		m_BulletPos.y = 0;
	}

	void WeaponCreationTool::LoadWeapons() {
		//TODO: Implement loading of weapons
	}

	void WeaponCreationTool::SaveWeapons() {

		std::string name = m_EditableWeapon->name;
		std::string WeaponPath = std::string(GetResourceDirectory()) + "weapons\\" + name + ".json";

		FILE* outfile;
		if (fopen_s(&outfile, WeaponPath.c_str(), "w") == 0)
		{
			WriterJson&lt;112&gt; writer(outfile, false);
			writer.AddMember("name", name.c_str());
			writer.AddMember("damage", m_EditableWeapon->damage);
			writer.AddMember("range", m_EditableWeapon->range);
			writer.AddMember("projectilespeed", m_EditableWeapon->projectileSpeed);
			writer.AddMember("projectilespread", m_EditableWeapon->projectileSpread);
			writer.AddMember("projectilecount", m_EditableWeapon->projectileCount);
			writer.AddArray("projectilebeat", m_EditableWeapon->beatPattern);
		}
	}
}
</code>
                    </pre>
                    <div class="code-snippet-button-container">
                        <button type="button" @click="ToggleCodeSnippet(2)" class="code-snippet-button">Toggle Snippet</button>
                        <!-- <a href="https://github.com/kyliandekker/in-sheeps-clothing/blob/main/Assets/Scripts/Sheep/PeekSheep.cs" class="code-snippet-button" target="_blank">View on github</a> -->
                    </div>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Crumbling tile</p>
                    <ExpandableImage class="contribution-image"
                        :src="this.contributionImages[3]"/>
                    <p class="contribution-text">
                        I was also involved in creating some of the traps for the game. 
                        This was managed using a trap system, and I had to create the crumbling trap. 
                        This trap would be walkable at first, but once you walked over it becomes a hole 
                        that is not walkable. For this, a new trigger had to be created for when the 
                        player left the tile, instead of the already existing tile events.
                    </p>
                    <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState[3]}">
<code class="language-csharp">void CreateCrumblingTile(gudenuff::EntityID& a_Id, glm::ivec2 a_GridPos)
{
    auto& colSys = ECS.GetSystem&lt;CollisionSystem>();
    auto& comp = colSys.CreateComponent(a_Id);
    auto& transComp = ECS.GetSystem&lt;TransformSystem>().CreateComponent(a_Id);

    comp.m_Steppable = true;
    colSys.SetComponentPos(a_Id, a_GridPos.x, a_GridPos.y, true);

    RenderComponent& renderComp = ECS.GetSystem&lt;RenderSystem>().CreateComponent(a_Id);
    std::shared_ptr&lt;SpriteSheet> spriteSheet = ECS.GetSystem&lt;ResourceManager>().GetSpriteSheet(gudenuff::GetHash("FloorTiles.png"));
    renderComp.Init({ spriteSheet, glm::uvec2(1, 1) });

    auto& tagSys = ECS.GetSystem&lt;TagSystem>();
    tagSys.SetTag(a_Id, "Trap");

    auto& trapSys = ECS.GetSystem&lt;TrapSystem>();
    trapSys.CreateComponent(a_Id);
    trapSys.SetTrapAction(a_Id, Stringify(CrumblingTrap));
    trapSys.SetLeaveTrapAction(a_Id, Stringify(CrumblingTrapLeave));

    auto& aComp = ECS.GetSystem&lt;AudioSystem>().CreateComponent(a_Id);
    aComp.AddSound(GetHash("crumbling_tile_crumble.wav"));
}
    
StartTrapFunc(CrumblingTrapLeave)
{
	auto& colSys = ECS.GetSystem&lt;CollisionSystem>();
	auto& comp = colSys.GetComponent(trapID);
	if (comp.m_Steppable == true)
	{
		ECS.GetSystem&lt;AudioSystem>().GetComponent(trapID).Play(GetHash("crumbling_tile_crumble.wav"));
		RenderComponent& renderComp = ECS.GetSystem&lt;RenderSystem>().GetComponent(trapID);
		std::shared_ptr&lt;SpriteSheet> spriteSheet = ECS.GetSystem&lt;ResourceManager>().GetSpriteSheet(gudenuff::GetHash("FloorTiles.png"));
		renderComp.m_Sprite = { spriteSheet, glm::uvec2(2, 1) };

		unsigned int x, y;
		comp.m_Steppable = false;
		ECS.GetSystem&lt;CollisionSystem>().GetCompPos(trapID, x, y);
		colSys.SetComponentPos(trapID, x, y, false);
	}
}
</code>
                    </pre>
                    <div class="code-snippet-button-container">
                        <button type="button" @click="ToggleCodeSnippet(3)" class="code-snippet-button">Toggle Snippet</button>
                        <!-- <a href="https://github.com/kyliandekker/in-sheeps-clothing/blob/main/Assets/Scripts/Sheep/PeekSheep.cs" class="code-snippet-button" target="_blank">View on github</a> -->
                    </div>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Additional features include but are not limited to</p>
                    <ul>
                        <li>Enemy pattern</li>
                        <li>Scene transition</li>
                        <li>Rotation for preset levels</li>
                        <li>Fixing enemy attack</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="team-section">
            <h2 class="section-header">The team</h2>
            <div class="basic-info">
                <p>Team size: 12 developers</p>
                <p>Programmers: 8 | Artists: 2 | Designers: 2
                </p>
            </div>
            <div class="team-container">
                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Lex Roovers | Programmer</p>
                            <a href="https://www.linkedin.com/in/lex-roovers/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Kylian Dekker | Programmer</p>
                            <a href="https://www.linkedin.com/in/kylian-dekker-26957015b/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Martijn Vahl | Programmer</p>
                            <a href="https://www.linkedin.com/in/martijnvahl/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Justin Kujawa | Programmer</p>
                            <a href="https://www.linkedin.com/in/justin-kujawa-37094718a/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Slava Takrovskij | Programmer</p>
                            <a href="https://www.linkedin.com/in/slava-takrovskij-21b7691b7/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Lyobomir Kostadinov | Programmer</p>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Sam Boots | PR lead / programmer</p>
                            <a href="https://www.linkedin.com/in/sam-boots-7b256b15b/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Stan Vogels | Programmer</p>
                            <a href="https://www.linkedin.com/in/maria-ioannou-0898841b8/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Maria Ioannou | Artist</p>
                            <a href="https://www.linkedin.com/in/maria-ioannou-0898841b8/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                    <div class="team-element">
                        <div class="team-name">
                            <p>Rembrandt van Leeuwen | Artist</p>
                            <a href="https://www.linkedin.com/in/rembrandt-van-leeuwen-968801a1/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Wesley Cats | Producer</p>
                            <a href="https://www.linkedin.com/in/wesley-cats-games/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Luca Yavuzok | Design Lead</p>
                            <a href="https://www.linkedin.com/in/luca-yavuzok-04067815b/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="learned-section">
            <h2 class="section-header">What I have learned form this project</h2>
            <div class="learned-container">
                <div class="learned-element">
                    <h3>Working in a custom engine</h3>
                    <p>
                        Before this project, I worked in engines like Unity, Unreal Engine and I even created engines
                        myself. But working in a custom engine created by another team, getting to know the code base of a custom engine
                        and improve it where nessesary taught me a lot about reading code bases and adapting to new systems.
                    </p>
                </div>
                <div class="learned-element">
                    <h3>Working with a producer</h3>
                    <p>
                        This was the first project where I worked with a dedicated producer to manage the planning, 
                        making sure everyone kept to the planning, and that we were working in an efficient workflow. 
                        This included doing extensive burndowns after every sprint, good sprint planning, and daily updates. 
                        I enjoyed having a producer in the team so I could focus myself on programming.
                    </p>
                </div>
                <div class="learned-element">
                    <h3>ECS system</h3>
                    <p>
                        Working in an engine which uses an ECS system was really interesting to me. I have created my own
                        ECS system before but never actually created an engine with this system. After using the system designed
                        by my peers I got really excited to implement my own version of an ECS system in my own custom engine.
                    </p>
                </div>
            </div>
        </section>

        <iframe class="itchio" frameborder="0" src="https://itch.io/embed/1572705?linkback=true" width="552" height="167"><a href="https://buas.itch.io/gudenuff-drumsofharmony">
            Setsuko: Drums of Harmony by Breda University of Applied Sciences, Piinda, Clockweiz, lamci, Reemhi, Marivahlio, NeoSup, lyubomir_kostadinov, Alucard</a>
        </iframe>
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-csharp';

import Image0 from '/src/assets/Image/Portfolio/GE/img8.jpg'
import Image1 from '/src/assets/Image/Portfolio/GE/img0.png'
import Image2 from '/src/assets/Image/Portfolio/GE/img1.jpg'
import Image3 from '/src/assets/Image/Portfolio/GE/img2.jpg'
import Image4 from '/src/assets/Image/Portfolio/GE/img3.png'
import Image5 from '/src/assets/Image/Portfolio/GE/img4.png'
import Image6 from '/src/assets/Image/Portfolio/GE/img5.png'
import Image7 from '/src/assets/Image/Portfolio/GE/img6.png'
import Image8 from '/src/assets/Image/Portfolio/GE/img7.jpg'

import con0 from "/src/assets/Image/Portfolio/GE/contributions/GifCombatSystem.gif";
import con1 from "/src/assets/Image/Portfolio/GE/contributions/GifEnemySpawning.gif";
import con2 from "/src/assets/Image/Portfolio/GE/contributions/GifWeaponCreationTool.gif";
import con3 from "/src/assets/Image/Portfolio/GE/contributions/GifCrumbling.gif";

import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue';
import ExpandableImage from '../IndividualComponents/ExpandableImage.vue'


export default {
    data() {
        return {
            name: 'GE',
            mobile: false,
            images: [
            {
                src: Image0,
                index: 0
            },            
            {
                src: Image1,
                index: 1
            },
            {
                src: Image2,
                index: 2
            },
            {
                src: Image3,
                index: 3
            },
            {
                src: Image4,
                index: 4
            },
            {
                src: Image5,
                index: 5
            },
            {
                src: Image6,
                index: 6
            },
            {
                src: Image7,
                index: 7
            },
            {
                src: Image8,
                index: 8
            }
            ],
            contributionImages: [
                con0,
                con1,
                con2,
                con3
            ],
            contributionState: [false, false, false, false],
        }
    },
    beforeMount() {
        this.$emit('OpenNavBar');
    },
    mounted() {
        this.IsMobile();
        window.addEventListener('resize', this.IsMobile);
        Prism.highlightAll();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.IsMobile);
    },
    updated(){
        Prism.highlightAll();
    },
    methods: {
        IsMobile() {
            if (window.innerWidth <= 1000) {
                this.mobile = true
            } else {
                this.mobile = false
            }
        },
        ToggleCodeSnippet(index){
            this.contributionState[index] = !this.contributionState[index];
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = 'Stan Vogels | Gudenuff Engine - Setsuko';
            }
        },
    },
    components:{
        CarrouselComp,
        ExpandableImage,
    }
}
</script>

<style scoped>
.header-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/GE/banner.png');
}
</style>