<template>void RayTracer::CreateTexture(SDL_Renderer* a_Renderer, std::clock_t a_Clock, int a_curScene)
{	
    m_Frames++;
    if (a_curScene != 0) {
        int scenes = sceneManager.AmountOfScenes;
        if (m_CurSceneNum + a_curScene >= 0 && m_CurSceneNum + a_curScene &lt; scenes) {
            m_CurSceneNum += a_curScene;
            m_Origin = Point3(0, 0, 0);
            m_CurScene = sceneManager.Scenes[m_CurSceneNum];
        }
    }

    const int amountOfThreadsx = 6;
    const int amountOfThreadsy = 6;

    std::thread renderThreads[amountOfThreadsx * amountOfThreadsy];

    for (int x = 0; x &lt; amountOfThreadsx; x++)
    {
        for (int y = 0; y &lt; amountOfThreadsy; y++)
        {
            renderThreads[amountOfThreadsy * x + y] = std::thread(&RayTracer::Thread, this, ColorBuffers[amountOfThreadsy * x + y], x * m_XBlockLength, y * m_YBlockLength, x * m_XBlockLength + m_XBlockLength, y * m_YBlockLength + m_YBlockLength, a_Clock);
        }
    }

    float div = MSAAx > 1 ? 1 : 1.f / m_Frames;
    for (int a = 0; a &lt; amountOfThreadsx; a++)
    {
        for (int b = 0; b &lt; amountOfThreadsy; b++)
        {
            renderThreads[amountOfThreadsy * a + b].join();
            for (int x = 0; x &lt; m_YBlockLength; x++)
            {
                for (int y = 0; y &lt; m_XBlockLength; y++)
                {
                    int curBlock = amountOfThreadsx * a + b;
                    int curColor = m_XBlockLength * x + y;

                    Color color = (ColorBuffers[curBlock][curColor] * 255) * div;
                    SDL_SetRenderDrawColor(a_Renderer, static_cast&lt;Uint8>(color.x), static_cast&lt;Uint8>(color.y), static_cast&lt;Uint8>(color.z), 0);
                    SDL_RenderDrawPoint(a_Renderer, ((a * m_XBlockLength) + (y))/* + a * 2*/, ((b * m_YBlockLength) + (x)) /*+ b * 2*/);
                }
            }
        }
    }

    SDL_RenderPresent(a_Renderer);
}

void RayTracer::Thread(Color* a_ColorBuffer, int a_StartPointx, int a_StartPointY, int a_Width, int a_Height, std::clock_t a_Clock)
{
    std::srand(a_Clock);

    int index = 0;
    for (int y = a_StartPointY; y &lt; a_Height; y ++)
    {
        for (int x = a_StartPointx; x &lt; a_Width; x ++)
        {
            if (MSAAx > 1) {
                Color pixelColor;
                for (int AA = 0; AA &lt; MSAAx; AA++)
                {
                    float u = (float(x) + m_MSAA_U[AA]) / m_ImageWidth;
                    float v = (float(y) + m_MSAA_V[AA]) / m_ImageHeight;

                    Vec3 Direction = m_TopLeftCorner + (u * m_Horizontal) - (v * m_Vertical);
                    Ray ray = Ray(m_Origin, Normalized(Direction));
                    pixelColor += Trace(ray, 0);
                }
                pixelColor /= static_cast&lt;float>(MSAAx);
                a_ColorBuffer[index] = pixelColor;
            }
            else {
                float u = (float(x) + static_cast&lt;float>(std::rand()) / RAND_MAX) / m_ImageWidth;
                float v = (float(y) + static_cast&lt;float>(std::rand()) / RAND_MAX) / m_ImageHeight;

                Vec3 Direction = m_TopLeftCorner + (u * m_Horizontal) - (v * m_Vertical);
                Ray ray = Ray(m_Origin, Normalized(Direction));

                a_ColorBuffer[index] += Trace(ray, 0);
                Color col = Trace(ray, 0);
                index++;
            }
        }
    }
}</template>