<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Descent raytraced</h1>
                    <h2 class="header-subtitle">Descent (1995) but raytraced</h2>
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

        <div class="links">
            <div class="findcode-github">
                <h1>Find this project on</h1>
                <a href="https://github.com/BredaUniversityGames/DXX-Raytracer" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
            </div>

            <div class="rewards">
                <h1>Featured in</h1>
                <a href="https://www.pcgamer.com/descent-ray-tracing/" target="_blank"><img class="reward-img" src="/src/assets/Image/Logos/pcgamer.webp"></a>
            </div>
        </div>

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

                <CodeSnippetComponent hascode="true">
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

                <CodeSnippetComponent>
                    <template v-slot:Title>
                        Additional contributions include:
                    </template>

                    <template v-slot:Text>
                        <ul>
                            <li>PC x64 build configuration</li>
                            <li>Cross-platform allocation for PS5</li>
                            <li>Cross patform diverse logger</li>
                            <li>A cross-platform timer</li>
                            <li>Abstracting windows dependend systems</li>
                            <li>Researching an old code base</li>
                            <li>Shareware support implementation</li>
                            <li>Added splash screen</li>
                            <li>Texture reworks and emissive adjustments</li>
                            <li>Light flashing on level endings</li>
                        </ul>
                    </template>
                </CodeSnippetComponent>
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
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Lyobomir Kostadinov | Graphics programmer</p>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Lily Haverlag | Engine / Audio programmer</p>
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

        <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/BredaUniversityGames/DXX-Raytracer" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Image0 from '/src/assets/Image/Portfolio/DR/img10.webp'
import Image1 from '/src/assets/Image/Portfolio/DR/img11.webp'
import Image2 from '/src/assets/Image/Portfolio/DR/img12.webp'
import Image3 from '/src/assets/Image/Portfolio/DR/img13.webp'
import Image4 from '/src/assets/Image/Portfolio/DR/img14.webp'

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
                document.title = 'Stan Vogels | Descent Raytraced';
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/DR/Banner.webp');
}

.links{
  grid-template-columns: repeat(2, 1fr);
}
</style>