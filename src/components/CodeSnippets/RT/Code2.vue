<template>Vec3 RayTracer::GetRefraction(const Vec3& a_Direction, const Vec3& a_Normal, const float& a_Ior)
{
    float cosi = clamp(dot(a_Direction, a_Normal), -1, 1);

    float ior1 = 1, ior2 = a_Ior;
    Vec3 n = a_Normal;
    if (cosi &lt; 0) {
        cosi = -cosi; 
    } else { 
        float temp = ior1;
        ior1 = ior2;
        ior2 = temp;
        n = -a_Normal; 
    }

    float eta = ior1 / ior2;
    float TIR = 1 - eta * eta * (1 - cosi * cosi);
    return TIR &lt; 0 ? Vec3() : eta * a_Direction + n * (eta * cosi - sqrtf(TIR));
}

float RayTracer::Fresnel(const Vec3& a_Direction, const Vec3& a_Normal, const float& a_Ior)
{
    float cosi = clamp(dot(a_Direction, a_Normal), -1, 1);
    float ior1 = 1, ior2 = a_Ior;

    if (cosi > 0){
        float SwitchTemp = ior1;
        ior1 = ior2;
        ior2 = SwitchTemp;
    }

    float TIR = ior1/ior2 * sqrtf(1 - cosi * cosi);

    if (TIR >= 1) {
        return 1;
    }
    else {
        float cost = sqrt(1 - TIR * TIR);
        cosi = fabsf(cosi);
        float Rs = ((ior2 * cosi) - (ior1 * cost)) / ((ior2 * cosi) + (ior1 * cost));
        float Rp = ((ior1 * cosi) - (ior2 * cost)) / ((ior1 * cosi) + (ior2 * cost));
        return  (Rs * Rs + Rp * Rp) / 2;
    }
}

Ray RayTracer::GetReflectionRay(Ray& a_Ray, int a_Intersection)
{
    Vec3 intersectionPoint = a_Ray.PositionAt(a_Ray.m_Length);
    Vec3 normal = m_CurScene.GetShape(a_Intersection)->GetNormal(intersectionPoint);
    Vec3 hitNormal = Normalized(normal) * 0.00001f;

    Vec3 ReflectDirection = a_Ray.m_Direction - 2 * dot(a_Ray.m_Direction, 
        m_CurScene.GetShape(a_Intersection)->GetNormal(intersectionPoint)) * m_CurScene.GetShape(a_Intersection)->GetNormal(intersectionPoint);
    return Ray(intersectionPoint + hitNormal, Normalized(ReflectDirection));
}

Color RayTracer::BeersLaw(Ray a_Ray, Color a_Color, float a_Ior, int a_Index)
{
    Vec3 InterSectionPoint = a_Ray.PositionAt(a_Ray.m_Length);
    Color absorb = Color(1, 1, 1) - a_Color;
    if (dot(a_Ray.m_Direction, m_CurScene.GetShape(a_Index)->GetNormal(InterSectionPoint)) > 0){
        float length = a_Ray.m_Length;
            Color returnCol = absorb * a_Ior * -length;
            return Color(expf(returnCol.x), expf(returnCol.y), expf(returnCol.z));
    }
    return a_Color;
}</template>