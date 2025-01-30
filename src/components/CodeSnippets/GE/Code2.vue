<template>void CreateCrumblingTile(gudenuff::EntityID& a_Id, glm::ivec2 a_GridPos)
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
}</template>