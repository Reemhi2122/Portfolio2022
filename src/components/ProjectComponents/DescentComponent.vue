<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Descent raytraced</h1>
                    <h2 class="header-subtitle">Descent (1995) but raytraced [WIP]</h2>
                </div>
            </div>

            <video class="project-video" controls>
                <source src="/src/assets/Image/Portfolio/DR/DescentTrailer.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div class="indv-project-bubbles-container">
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Engine programmer
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">code</span> C++ | C
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">group</span> 7 members
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 1 year
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2022 / 2023
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">Devices</span> Windows
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">Devices</span> PlayStation
                </div>
            </div>
        </div>

        <CarrouselComp :cards="this.images" class="carousel-comp"/>

        <p class="project-text">
            Experience the enhanced world of Descent with raytracing technology, now ported over to the PS5. 
            Immerse yourself in a captivating environment filled with dynamic light and shadow, highly-reflective 
            surfaces, and intricate details that bring the game to life. Discover Descent that 
            looks and feels more immersive than ever before.
        </p>

        <!-- <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/InSheepsClothing" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div> -->

        <section class="software-skills">
            <h2 class="section-header">Software skills improved this project</h2>
            <div class="software-skills-icons">
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" title="C" />
                    <p class="software-skill-title"> Language </p>
                    <p class="software-skill-text"> C </p>
                </div>                
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" />
                    <p class="software-skill-title"> Language </p>
                    <p class="software-skill-text"> C++ </p>
                </div>                
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
                    <p class="software-skill-title"> Source control </p>
                    <p class="software-skill-text"> Git </p>
                </div>
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg" title="CMake" />
                    <p class="software-skill-title"> Building tool </p>
                    <p class="software-skill-text"> CMake </p>
                </div>
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" title="Windows" />
                    <p class="software-skill-title"> Platform </p>
                    <p class="software-skill-text"> Windows </p>
                </div>           
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="../../assets/Image/Logos/PlayStation.svg" title="PS5" />
                    <p class="software-skill-title"> Platform </p>
                    <p class="software-skill-text"> PlayStation </p>
                </div>
            </div>
        </section>

        <section class="contribution-section">
            <h2 class="section-header">What I contributed to the project</h2>
            <div class="contribution-element-container">
                <div class="contribution-element">
                    <p class="contribution-element-title">Converting Descent from PC to PS5 </p>
                    <!-- <img class="contribution-image"
                        src="/src/assets/Image/Portfolio/COTF/contributions/FollowingNPC.gif"> -->
                    <p class="contribution-text">
                        This game was initially created in 1995 for MS-DOS. We found a Github repository that has 
                        already converted it to modern Windows using SCons. We converted this to CMake and made sure 
                        it also runs on x64 architecture. 
                        
                        <br><br>

                        My job, was to convert this windows version to PS5, while making 
                        sure it still worked for Windows. This was a challenge because documentation on using CMake for the 
                        PS5 doesn't exist and the Windows version relied heavily on SDL.
                    </p>
                    <p>*Cannot show code due to an NDA with PlayStation</p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Cross-platform reading / writing for PS5</p>
                    <!-- <video class="contribution-image"
                        src="/src/assets/Image/Portfolio/COTF/contributions/FollowingAI.mp4" autoplay loop></video> -->
                    <p class="contribution-text">
                        For the conversion to the PS5 platform, I had to rework the file handling of the original project
                        that was using a library called Physfs. To do this, I had two choices: creating a new file handler
                        or reworking the library so it can also work on PS5.
                        
                        <br><br>

                        After doing some research on the library I
                        found on their Github that it should be feasible to convert the library to work on platforms like
                        Playstations etc. I chose to rework the library because I believed this would save me the most time,
                        and still teach me a lot about how the PS5 file reading/writing works.
                    </p>
                    <p>*Cannot show code due to an NDA with PlayStation</p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Cross-platform input for PS5</p>
                    <!-- <img class="contribution-image" 
                        src="/src/assets/Image/Portfolio/COTF/contributions/DialogueSystem.gif"> -->
                    <p class="contribution-text">
                        Because the original project used SDL for input, I also had to rework this. The biggest challenge with
                        this was that the project also supported the remapping of keys so the system wasn't as easy to replace
                        as a normal input system. I recreated the input system by creating a new input system myself that would
                        use the remap function that is used in the original project.
                    </p>
                    <p>*Cannot show code due to an NDA with PlayStation</p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Runtime texture loading</p>
                    <Expandablevideo class="contribution-image"
                        :src="this.contributionImages[0]" autoplay loop></Expandablevideo>
                    <p class="contribution-text">
                        In this project, we wanted artists to upscale the textures to PBR textures so the light would
                        better interact with the surfaces of the game. This is because the game is quite flat by itself. 
                        To improve the workflow of the artists I created the runtime texture loading tool, which would upload 
                        all the adjusted textures in the assets folder and link them to the materials.
                    </p>
                    <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState[3]}">
<code class="language-csharp">void RT_LoadRuntimeBitmaps(void)
{
	//Funcion loads bitmaps changed in runtime, currently only works for
	//files using the 0000_x.extension format. It also updates material values
	//changed in 0000.txt

	//Getting list of files in the directory.
	char** directory_list = PHYSFS_enumerateFiles("assets/textures/");

	//Going over all the files in the directory
	for (char** i = directory_list; *i != NULL; i++) {
		char file_path[128];
		sprintf(file_path, "assets/textures/%s", *i);
		
		//Check if file changed or has been created since last check.
		//If its old, continue to next element.
		PHYSFS_Stat stat;
		PHYSFS_stat(file_path, &stat);
		if (stat.createtime &lt;= g_LastTextureUpdate && stat.accesstime &lt;= g_LastTextureUpdate)
			continue;

		//Getting the file name, example: {999.png}.
		char file_name[128];
		strcpy(file_name, *i);
		printf(" * NEW = [%s].\n", file_name);

		//Getting the extension and numb of the file, example: {.png, 999}.
		char* extension = strrchr(file_name, '.');
		char* num = strtok(file_name, "_");
		if (!num || !extension)
			continue;

		//converting numb to integer  data
		uint16_t bm_index = atoi(num);
		RT_MaterialDefinition current_material = materials[bm_index];

		//Upating a .txt
		if (strcmp(extension, ".txt") == 0) {
			RT_MaterialDefinitionFile def_file;
			def_file = RT_ParseMaterialDefinitionFile(bm_index);

			current_material.roughness = def_file.roughness;
			current_material.metalness = def_file.metalness;
			current_material.emissive_factor = (RT_Vec3){
				def_file.emissive_r,
				def_file.emissive_g,
				def_file.emissive_b,
			};
		}

		//Updating a .png
		if (strcmp(extension, ".png") == 0) {
				
			RT_ResourceHandle texture_handle;
			int w, h, c;

			//Getting the type from file, example: {E} from 999_E.png
			char* type = strtok(strtok(NULL, "_"), ".");

			if (type != NULL) {
				if (strcmp(type, "C") == 0) {
					RT_UploadRuntimeBitmap(*i, bm_index, &current_material.albedo_texture);
				}
				else if (strcmp(type, "N") == 0) {
					RT_UploadRuntimeBitmap(*i, bm_index, &current_material.normal_texture);
				}
				else if (strcmp(type, "MR") == 0) {
					RT_UploadRuntimeBitmap(*i, bm_index, &current_material.metallic_roughness_texture);
				}
				else if (strcmp(type, "E") == 0) {
					RT_UploadRuntimeBitmap(*i, bm_index, &current_material.emissive_texture);
				}
			}
		}
		
		//Updating the material for rendering
		materials[bm_index] = current_material;
		RT_UpdateMaterial(bm_index, &current_material);
	}

	//Set last texture update
	//Free the files list
	g_LastTextureUpdate = time(NULL);
	PHYSFS_freeList(directory_list);
}

void RT_UploadRuntimeBitmap(char* fileName, uint16_t bm_index, RT_ResourceHandle* curResourceHandle) {
	RT_ResourceHandle texture_handle;
	int w, h, c;

	RT_ArenaMemoryScope(&g_thread_arena)
	{
		const char* filename = RT_ArenaPrintF(&g_thread_arena, "assets/textures/%s", fileName);
		const unsigned char* image_data = RT_LoadImageFromDisk(&g_thread_arena, filename, &w, &h, &c, 4);
		texture_handle = RT_UploadTexture(&(RT_UploadTextureParams) {
			.width = w,
				.height = h,
				.pixels = image_data,
				.name = RT_ArenaPrintF(&g_thread_arena, "Game Texture #%i (substituted: %s)", bm_index, fileName),
				.format = RT_TextureFormat_SRGBA8,
		});
		*curResourceHandle = texture_handle;
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
                    <p class="contribution-element-title">Additional contributions include but are not limited to</p>
                    <ul>
                        <li>PC x64 build configuration</li>
                        <li>Cross-platform allocation for PS5</li>
                        <li>Cross patform diverse logger</li>
                        <li>A cross-platform timer</li>
                        <li>Abstracting windows dependend systems</li>
                        <li>Researching an old code base</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="team-section">
            <h2 class="section-header">The team</h2>
            <div class="basic-info">
                <p>Team size: 7 developers</p>
                <p>Programmers: 7
                </p>
            </div>
            <div class="team-container">
                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Sam Boots | Lead & Engine programmer</p>
                            <a href="https://www.linkedin.com/in/sam-boots-7b256b15b/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Wessel Frijters | Engine programmer</p>
                            <a href="https://www.linkedin.com/in/wessel-frijters-b121b9164/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Daniël Cornelisse | Graphics programmer</p>
                            <!-- <a href="https://www.linkedin.com/in/stanvogels/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a> -->
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Justin Kujawa | Graphics programmer </p>
                            <a href="https://www.linkedin.com/in/justin-kujawa-37094718a/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                        <!-- <p class="team-portfolio"><a
                                href="https://www.artstation.com/luukouwehand">https://www.artstation.com/luukouwehand</a>
                        </p> -->
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Lyobomir Kostadinov | Graphics programmer</p>
                            <!-- <a href="https://www.linkedin.com/in/olivierdral/"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a> -->
                        </div>
                        <!-- <p class="team-portfolio"><a
                                href="https://oli4dral.artstation.com/">https://oli4dral.artstation.com/</a></p> -->
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Lily Haverlag | Engine / Audio programmer</p>
                            <!-- <a href="https://www.linkedin.com/in/nathalie-stuit-38250124b/"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a> -->
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Stan Vogels | Engine programmer</p>
                            <a href="https://www.linkedin.com/in/stanvogels/" target="_blank"><img
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
                    <h3>PS5 programming</h3>
                    <p>
                        Before this project, I had some experience in programming for PS4. But this was the first time I created
                        a project for PS5. Because a lot happened from PS4 to PS5, I had to learn how it worked all over again.
                        This taught me a lot about how to program for PS5 and improved my skills in picking up new techniques 
                        and platforms like PS5. 
                    </p>
                </div>
                <div class="learned-element">
                    <h3>Reading old code bases</h3>
                    <p>
                        Because this project was originally written in 1995 and with languages like C and some assembly, 
                        I had to learn how to read and understand old code bases. Besides understanding it, I also had to add, 
                        remove and improve features in it. This taught me a lot about reading code bases in general and gave 
                        me the experience of working on a pre-existing game, engine, or application. 
                    </p>
                </div>
                <div class="learned-element">
                    <h3>C Programming</h3>
                    <p>
                        I had no previous experience with programming in C, but I did in its extensions like C# and C++.
                         Reading and programming C taught me a lot about the language and even improved my knowledge of C#
                          and C++. After programming in it for 6+ months I can now say that I am experienced in the C language.
                    </p>
                </div>
            </div>
        </section>

        <!-- <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/InSheepsClothing" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div> -->
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Image0 from '/src/assets/Image/Portfolio/DR/img10.png'
import Image1 from '/src/assets/Image/Portfolio/DR/img11.png'
import Image2 from '/src/assets/Image/Portfolio/DR/img12.png'
import Image3 from '/src/assets/Image/Portfolio/DR/img13.png'
import Image4 from '/src/assets/Image/Portfolio/DR/img14.png'

import con0 from "/src/assets/Image/Portfolio/DR/contributions/DR_CON_1.mp4"

import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue'
import Expandablevideo from '../IndividualComponents/ExpandableVideo.vue'

export default {
    data() {
        return {
            name: 'DR',
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
            }
            ],
            contributionImages: [
                con0
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
                document.title = 'Stan Vogels | Descent Raytraced';
            }
        },
    },
    components:{
        CarrouselComp,
        Expandablevideo
    }
}
</script>

<style scoped>
.header-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/DR/Banner.png');
}
</style>>