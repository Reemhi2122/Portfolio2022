<template>Color RayTracer::Illumination(Ray& a_Ray, int a_Index, float a_ImpactFactor)
{
    Color IlluminationColor = CalculateColor(a_Ray);
    if (!m_CurScene.GetShape(a_Index)->GetMaterial().GetBlocksShadow()) return IlluminationColor;
    
    Point3 LightOrigin = m_CurScene.GetLight(0)->GetPoint();

    //FirstRay
    Point3 intersectionPoint = a_Ray.PositionAt(a_Ray.m_Length);
    Vec3 normalDir = LightOrigin - intersectionPoint;
    
    //LightAttenuation
    IlluminationColor *= LightAttenuation(normalDir);
    
    //Normalize direction
    normalDir.Normalize();

    //SoftShadow
    IlluminationColor *= GetLightShadow(intersectionPoint, a_Index);

    //ObjectShadow
    IlluminationColor *= Shading(a_Index, intersectionPoint, normalDir);

    IlluminationColor *= a_ImpactFactor;

    IlluminationColor = PhongShading(a_Ray, IlluminationColor, a_Index);
    
    return IlluminationColor;
}

float RayTracer::Shading(int a_Index, Vec3 a_IntersectionPoint, Vec3 a_Direction)
{
    return clamp(dot(m_CurScene.GetShape(a_Index)->GetNormal(a_IntersectionPoint), a_Direction), 0, 1);
}

float RayTracer::GetLightShadow(Vec3 a_IntersectionPoint, int a_Index)
{
    float returnColor = 0;
    Vec3 dir = m_CurScene.GetLight(0)->GetPoint() - a_IntersectionPoint;

    Vec3 hitNormal = m_CurScene.GetShape(a_Index)->GetNormal(a_IntersectionPoint);
    hitNormal.Normalize();
    hitNormal *= 0.001f;

    float dirLength = dir.length();
    dir.Normalize();

    Ray ray2 = Ray(a_IntersectionPoint + hitNormal, dir);
    returnColor += GetIntersectionShadow(ray2, dirLength) && ray2.m_Length &lt; dirLength ? 0 : 1;
    float Transparency = ray2.m_ObjectMaterials.GetTransparency() - 1;
    return Transparency > 0 ? returnColor + Transparency : returnColor;
}

float RayTracer::LightAttenuation(Vec3 a_RayDir)
{
    float Distance = sqrt(dot(a_RayDir, a_RayDir));
    return clamp(m_CurScene.GetLight(0)->GetBrightness() / ((4 * PI) * Distance), 0, 1);
}

Color RayTracer::PhongShading(Ray& a_Ray, Color a_Color, int a_index)
{
    if (!m_CurScene.GetShape(a_index)->GetMaterial().GetIsSpecular())
        return a_Color;

    Point3 LightOrigin = m_CurScene.GetLight(0)->GetPoint();
    Point3 intersectionPoint = a_Ray.PositionAt(a_Ray.m_Length);
    Vec3 normalDir = LightOrigin - intersectionPoint;

    normalDir.Normalize();

    Ray reflectiveray = GetReflectionRay(a_Ray, a_index);
    float sharpness = 80;
    float specular = pow(clamp(dot(reflectiveray.m_Direction, normalDir), 0, 1), sharpness);
    return Vec3(
        clamp(specular + a_Color.x, 0, 1),
        clamp(specular + a_Color.y, 0, 1),
        clamp(specular + a_Color.z, 0, 1));

    return a_Color;
}</template>