<template>#include "tools/WeaponCreationTool.h"
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
}</template>