<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Raytracer</h1>
                    <h2 class="header-subtitle">Creating a custom raytracer</h2>
                </div>
            </div>

            <!-- <video class="project-video" poster="../../assets/Image/Portfolio/RT/Raytracer.jpg" controls>
                <source src="/src/assets/Image/Portfolio/RT/Raytracervid.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video> -->

            <div class="indv-project-bubbles-container">
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Generalist programmer
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">code</span> C++
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">group</span> 1 members
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 8 weeks
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2020
                </div>
            </div>
        </div>

        <CarrouselComp :cards="this.images" class="carousel-comp"/>

        <p class="project-text">
            In my 8-week raytracer project, I incorporated several features such as lights, Phong shading, reflection, refraction, 
            Beer's Law, specular effects, multi-threading, MSAA, and frame accumulation to improve the image quality. 
            The implementation of multi-threading accelerated the rendering process, while MSAA and frame accumulation 
            techniques reduced jagged edges and further enhanced the image quality.
        </p>

        <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/Raytracer" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>

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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" title="Jira" />
                    <p class="software-skill-title"> Planning </p>
                    <p class="software-skill-text"> Github Projects </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
                    <p class="software-skill-title"> Source control </p>
                    <p class="software-skill-text"> Git </p>
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
            <h2 class="section-header">Highlights of this Projects</h2>
            <div class="contribution-element-container">
                <div class="contribution-element">
                    <p class="contribution-element-title">Multi threading</p>
                    <img class="contribution-image"
                        src="/src/assets/Image/Portfolio/RT/contributions/RT_CON_1.jpg">
                    <p class="contribution-text">My raytracer project used multi-threading, with each block calculated by a separate CPU thread. While this 
                        pattern may not be the most optimized for the scene shown, it's generally effective for raytracing, leading to significant 
                        speed improvements.
                    </p>
                    <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState[0]}">
<code class="language-csharp">void RayTracer::CreateTexture(SDL_Renderer* a_Renderer, std::clock_t a_Clock, int a_curScene)
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
}
</code>
                    </pre>
                    <div class="code-snippet-button-container">
                        <button type="button" @click="ToggleCodeSnippet(0)" class="code-snippet-button">Toggle Snippet</button>
                        <a href="https://github.com/kyliandekker/in-sheeps-clothing/blob/main/Assets/Scripts/Sheep/PeekSheep.cs" class="code-snippet-button" target="_blank">View on github</a>
                    </div>
                </div>
                
                <div class="contribution-element">
                    <p class="contribution-element-title">Illumination</p>
                    <img class="contribution-image"
                        src="/src/assets/Image/Portfolio/RT/contributions/RT_CON_2.jpg">
                    <p class="contribution-text">
                        The raytracer included simple functionality like phong shading, soft shading and light attenuation. These functions
                        used the custom made math library included in the project.
                    </p>
                    <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState[1]}">
<code class="language-csharp">Color RayTracer::Illumination(Ray& a_Ray, int a_Index, float a_ImpactFactor)
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
}
</code>
                    </pre>
                    <div class="code-snippet-button-container">
                        <button type="button" @click="ToggleCodeSnippet(1)" class="code-snippet-button">Toggle Snippet</button>
                        <a href="https://github.com/kyliandekker/in-sheeps-clothing/blob/main/Assets/Scripts/Sheep/PeekSheep.cs" class="code-snippet-button" target="_blank">View on github</a>
                    </div>
                </div>

                <div class="contribution-element">
                    <p class="contribution-element-title">Reflection and Refraction</p>
                    <img class="contribution-image"
                        src="/src/assets/Image/Portfolio/RT/contributions/RT_CON_3.jpg">
                    <p class="contribution-text">
                        In the example above you can see the implementation of reflections and refraction.
                        As you can see they both cast different shadows and have an effect on each other. The
                        maximum bounce count of a ray in this scene is 5.
                    </p>
                    <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState[2]}">
<code class="language-csharp">Vec3 RayTracer::GetRefraction(const Vec3& a_Direction, const Vec3& a_Normal, const float& a_Ior)
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
</code>
                    </pre>
                    <div class="code-snippet-button-container">
                        <button type="button" @click="ToggleCodeSnippet(2)" class="code-snippet-button">Toggle Snippet</button>
                        <a href="https://github.com/kyliandekker/in-sheeps-clothing/blob/main/Assets/Scripts/Sheep/PeekSheep.cs" class="code-snippet-button" target="_blank">View on github</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="learned-section">
            <h2 class="section-header">What I have learned form this project</h2>
            <div class="learned-container">
                <div class="learned-element">
                    <h3>Optimalization</h3>
                    <p>
                        In my 8-week raytracer project, I improved my optimization skills by implementing multi-threading, 
                        frame accumulation, and MSAA techniques. I had to balance image quality and performance while 
                        prioritizing which optimizations to use to meet the deadline. The project provided valuable experience 
                        that I can apply to future career in programming.
                    </p>
                </div>
                <div class="learned-element">
                    <h3>Math library</h3>
                    <p>
                        In this project, I had the opportunity to create my own math library to perform vector and matrix operations. 
                        The library included essential vector functions such as multiplication, dot product, cross product, and normalization. 
                        For matrix operations, I implemented multiplication and addition functions to handle complex transformations. 
                        This task required a strong understanding of linear algebra concepts and their implementation in programming.
                    </p>
                </div>
                <div class="learned-element">
                    <h3>C++</h3>
                    <p>
                        This was one of my first C++ projects, so I learned a lot about memory management and working with pointers.
                         Looking back, there are definitely things I'd do differently now that I'm more experienced. But I'm still 
                         proud of how fast I was able to create a raytracer that actually works! It was a great learning experience 
                         that helped me build a solid foundation in programming and develop more advanced projects later on.
                    </p>
                </div>
            </div>
        </section>

        <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/Raytracer" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-csharp';

import Image1 from '/src/assets/Image/Portfolio/RT/RT3.jpg'
import Image2 from '/src/assets/Image/Portfolio/RT/RT4.jpg'
import Image3 from '/src/assets/Image/Portfolio/RT/RT5.jpg'
import Image4 from '/src/assets/Image/Portfolio/RT/RT6.jpg'
import Image5 from '/src/assets/Image/Portfolio/RT/Raytracer.jpg'
import Image6 from '/src/assets/Image/Portfolio/RT/RT7.jpg'

import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue';

export default {
    data() {
        return {
            name: 'DD',
            mobile: false,
            images: [          
            {
                src: Image1,
                index: 0
            },
            {
                src: Image5,
                index: 1
            },
            {
                src: Image4,
                index: 2
            },
            {
                src: Image6,
                index: 3
            },            
            {
                src: Image3,
                index: 4
            },
            {
                src: Image2,
                index: 5
            },
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
            Prism.highlightAll();
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = 'Stan Vogels | Raytracer';
            }
        },
    },
    components:{
        CarrouselComp,
    }
}
</script>

<style scoped>
.header-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/RT/RT7.jpg');
}


@media (max-width: 1000px) {
    .contribution-element-container {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, auto);
        grid-gap: 25px 5%;
    }
}
</style>