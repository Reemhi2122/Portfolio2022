<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Building Block Engine</h1>
                    <h2 class="header-subtitle">A custom engine created with DX11 [WIP]</h2>
                </div>
            </div>

            <!-- <video class="project-video" controls>
                <source src="" type="video/mp4">
                Your browser does not support the video tag.
            </video> -->

            <div class="indv-project-bubbles-container">
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Engine programmer
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">code</span> C++ | C
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">code</span> DX11
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">group</span> 1 member
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> ~2 year
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2023 - 2025
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">Devices</span> Windows
                </div>
            </div>
        </div>

        <CarrouselComp :cards="this.images" class="carousel-comp"/>

        <p class="project-text">
            Building Block (BB) is a passion project of mine – a C++ game engine I've been working on, built with DirectX 11. 
            I wanted to get a better handle on engine and graphics programming, so I decided to build most of it from scratch, with some exceptions like ImGui and stb_image. 
            BB currently handles GLTF models, custom memory management, self-made data structures, image processing, file I/O, multithreading, and shadow mapping. 
            This project is still actively in development, with planned DirectX 12 integration.
        </p>

        <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/BBEngine" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>

        <section class="software-skills">
            <h2 class="section-header">Software skills improved this project</h2>
            <div class="software-skills-icons">
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" />
                    <p class="software-skill-title"> Language </p>
                    <p class="software-skill-text"> C | C++</p>
                </div>
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="../../assets/Image/Logos/dx11.jpg" title="DX11" />
                    <p class="software-skill-title"> Graphics API </p>
                    <p class="software-skill-text"> DX11 </p>
                </div> 
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="../../assets/Image/Logos/hlsl.svg" title="hlsl" />
                    <p class="software-skill-title"> Shader language </p>
                    <p class="software-skill-text"> HLSL </p>
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
            <h2 class="section-header">List of current features</h2>
            <div class="contribution-element-container">
                <CodeSnippetComponent>
                    <template v-slot:Text>
                        <ul>
                            <li>DirectX 11 Renderer</li>
                                <ul>
                                    <li>Shadow mapping</li>
                                    <li>Directional, spot & point lights</li>
                                    <li>Texture loading / GLTF model rendering</li>
                                </ul>
                            <li>Custom memory allocators</li>
                                <ul>
                                    <li>Stack, Linear/Arena, Free list, Pool & Buddy allocator</li>
                                </ul>
                            <li>Self-made data structures</li>
                                <ul>
                                    <li>LinkedList, Pool, Queue, Vector</li>
                                </ul>
                                <li>File support</li>
                            <ul>
                                <li>GLTF model loading & model parsing</li>
                                <li>BMP files & image processing</li>
                                <li>JSON files & parsing</li>
                                <li>WAV files</li>
                            </ul>
                        </ul>
                    </template>
                </CodeSnippetComponent>

                <CodeSnippetComponent>
                    <template v-slot:Text>
                        <ul>
                            <li>Windows API file I/O (created for cross-platform)</li>
                            <li>Multi threading worker system</li>
                            <li>ImGui engine editor</li>
                                <ul>
                                    <li>Asset window with working path traversal</li>
                                    <li>Hierarchy view with children</li>
                                    <li>Inspector with component view for selected object</li>
                                    <li>Game view with camera control</li>
                                </ul>
                        </ul>
                    </template>
                </CodeSnippetComponent>
            </div>
        </section>

        <!-- <section class="contribution-section">
            <h2 class="section-header">What I contributed to the project</h2>
            <div class="contribution-element-container">
                <CodeSnippetComponent>
                    <template v-slot:Title>
                        Converting Descent from PC to PS5
                    </template>

                    <template v-slot:Text>
                        This game was initially created in 1995 for MS-DOS. We found a Github repository that has 
                        already converted it to modern Windows using SCons. We converted this to CMake and made sure 
                        it also runs on x64 architecture. 
                        
                        <br><br>

                        My job, was to convert this windows version to PS5, while making 
                        sure it still worked for Windows. This was a challenge because documentation on using CMake for the 
                        PS5 doesn't exist and the Windows version relied heavily on SDL.
                    </template>

                    <template v-slot:reason-no-code>
                        <p>*Cannot show code due to an NDA with PlayStation</p>
                    </template>
                </CodeSnippetComponent>

                <CodeSnippetComponent>
                    <template v-slot:Title>
                        Cross-platform reading / writing for PS5
                    </template>

                    <template v-slot:Text>
                        For the conversion to the PS5 platform, I had to rework the file handling of the original project
                        that was using a library called Physfs. To do this, I had two choices: creating a new file handler
                        or reworking the library so it can also work on PS5.
                        
                        <br><br>

                        After doing some research on the library I
                        found on their Github that it should be feasible to convert the library to work on platforms like
                        Playstations etc. I chose to rework the library because I believed this would save me the most time,
                        and still teach me a lot about how the PS5 file reading/writing works.
                    </template>

                    <template v-slot:reason-no-code>
                        <p>*Cannot show code due to an NDA with PlayStation</p>
                    </template>
                </CodeSnippetComponent>

                <CodeSnippetComponent>
                    <template v-slot:Title>
                        Cross-platform input for PS5
                    </template>

                    <template v-slot:Text>
                        Because the original project used SDL for input, I also had to rework this. The biggest challenge with
                        this was that the project also supported the remapping of keys so the system wasn't as easy to replace
                        as a normal input system. I recreated the input system by creating a new input system myself that would
                        use the remap function that is used in the original project.
                    </template>

                    <template v-slot:reason-no-code>
                        <p>*Cannot show code due to an NDA with PlayStation</p>
                    </template>
                </CodeSnippetComponent>

                <CodeSnippetComponent></CodeSnippetComponent>

                <CodeSnippetComponent hascode="true">
                    <template v-slot:Title>
                        Runtime texture loading
                    </template>

                    <template v-slot:Image>
                        <Expandablevideo class="contribution-image"
                        :src="this.contributionImages[0]" autoplay loop></Expandablevideo>
                    </template>

                    <template v-slot:Text>
                        In this project, we wanted artists to upscale the textures to PBR textures so the light would
                        better interact with the surfaces of the game. This is because the game is quite flat by itself. 
                        To improve the workflow of the artists I created the runtime texture loading tool, which would upload 
                        all the adjusted textures in the assets folder and link them to the materials.
                    </template>

                    <template v-slot:Code>
                        <code0/>
                    </template>
                </CodeSnippetComponent>

                <CodeSnippetComponent >
                    <template v-slot:Title>
                        Free camera
                    </template>

                    <template v-slot:Image>
                        <Expandablevideo class="contribution-image"
                        :src="this.contributionImages[1]" autoplay loop></Expandablevideo>
                    </template>

                    <template v-slot:Text>
                        I created the free camera tool because we wanted to be able to freely roam the level without the boundaries 
                        and difficulties of the game. This so we can check mistakes in the level loading, texture loading or enemy 
                        placement or if we needed to create marketing material for the game in the form of pictures or videos. 
                        The game, when in freemode, would pause and allow the user to make pictures of action shots. There is an 
                        option for collision to be turned off and on.
                    </template>
                    
                    <template v-slot:Code>
                        <Code1/>
                    </template>

                </CodeSnippetComponent>

                <CodeSnippetComponent>
                    <template v-slot:Title>
                        Additional contributions include but are not limited to
                    </template>

                    <template v-slot:Text>
                        <ul>
                            <li>PC x64 build configuration</li>
                            <li>Cross-platform allocation for PS5</li>
                            <li>Cross patform diverse logger</li>
                            <li>A cross-platform timer</li>
                            <li>Abstracting windows dependend systems</li>
                            <li>Researching an old code base</li>
                        </ul>
                    </template>
                </CodeSnippetComponent>

                <CodeSnippetComponent>
                    <template v-slot:Text>
                        <ul>
                            <li>Shareware support implementation</li>
                            <li>Added splash screen</li>
                            <li>Texture reworks and emissive adjustments</li>
                            <li>Light flashing on level endings</li>
                        </ul>
                    </template>
                </CodeSnippetComponent>
            </div>
        </section> -->

        <!-- <section class="learned-section">
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
        </section> -->

        <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/BBEngine" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Image0 from '/src/assets/Image/Portfolio/BB/img06.webp'
import Image1 from '/src/assets/Image/Portfolio/BB/img02.webp'
import Image2 from '/src/assets/Image/Portfolio/BB/img01.webp'
import Image3 from '/src/assets/Image/Portfolio/BB/img03.webp'
import Image4 from '/src/assets/Image/Portfolio/BB/img04.webp'
import Image5 from '/src/assets/Image/Portfolio/BB/img05.webp'

import con0 from "/src/assets/Image/Portfolio/DR/contributions/DR_CON_1.mp4"
import con1 from "/src/assets/Image/Portfolio/DR/contributions/DR_CON_2.mp4"

import code0 from "../CodeSnippets/Descent/Code0.vue"
import Code1 from "../CodeSnippets/Descent/Code1.vue"

import CodeSnippetComponent from '../IndividualComponents/CodeSnippetComponent.vue'
import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue'
import Expandablevideo from '../IndividualComponents/ExpandableVideo.vue'

export default {
    data() {
        return {
            name: 'DR',
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
            }
            ],
            contributionImages: [
                con0,
                con1
            ],
        }
    },
    beforeMount() {
        this.$emit('OpenNavBar');
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = 'Stan Vogels | Building Block Engine';
            }
        },
    },
    components:{
        CarrouselComp,
        Expandablevideo,
        CodeSnippetComponent,
        code0,
        Code1
    }
}
</script>

<style scoped>
.header-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/BB/Header.webp');
}
</style>