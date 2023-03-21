<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Descent raytraced</h1>
                    <h2 class="header-subtitle">Descent (1995) but raytraced</h2>
                </div>
            </div>

            <video class="project-video" poster="../../assets/Image/Portfolio/DR/temp.png" controls>
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
                    <span class="material-symbols-outlined">group</span> 8 members
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 4 weeks
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2020
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

        <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/InSheepsClothing" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>

        <section class="software-skills">
            <h2 class="section-header">Software skills improved this project</h2>
            <div class="software-skills-icons">
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" title="C" />
                    <p class="software-skill-text">
                        The Descent was orignally made in
                        C and assembly, I didn't have any
                        previous experience in C but by
                        diving head first into the code base
                        I learned a lot.
                    </p>
                </div>                
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" />
                    <p class="software-skill-text">
                        All the new classes we made in the
                        raytracer was based on C++. I already
                        had a lot of experience in C++ and learned
                        how to work in a project that is written in both
                        C and C++.
                    </p>
                </div>                
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
                    <p class="software-skill-text">
                        After using perforce for 2 years on school
                        it was refreshing to get back to git. It took
                        some time to get back in the workflow and improve
                        my old skills.
                    </p>
                </div>                
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="../../assets/Image/Logos/PlayStation.svg" title="PS5" />
                    <p class="software-skill-text">
                        One of the goals of this project was to get
                        Descent running on the PS5. I took the responsibility
                        for this and converted the whole project to the PS5
                        including file reading/writing, input and allocation.
                    </p>
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
                    <p>*Cannot show code because of NDA with PlayStation</p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Cross-platfrom reading / writing for PS5</p>
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
                    <p>*Cannot show code because of NDA with PlayStation</p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Cross-platfrom input for PS5</p>
                    <!-- <img class="contribution-image" 
                        src="/src/assets/Image/Portfolio/COTF/contributions/DialogueSystem.gif"> -->
                    <p class="contribution-text">
                        Because the original project used SDL for input, I also had to rework this. The biggest challenge with
                        this was that the project also supported the remapping of keys so the system wasn't as easy to replace
                        as a normal input system. I recreated the input system by creating a new input system myself that would
                        use the remap function that is used in the original project.
                    </p>
                    <p>*Cannot show code because of NDA with PlayStation</p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Cross-platform allocation for PS5</p>
                    <!-- <img class="contribution-image" 
                        src="/src/assets/Image/Portfolio/COTF/contributions/DialogueSystem.gif"> -->
                    <p class="contribution-text">
                        To make the project work for PS5, I also had to make a custom allocator for PS5. There is 
                        nothing fancy about the allocator and just replaces the original malloc, free, etc. to work for 
                        PS5 and do some exception handling.
                    </p>
                    <p>*Cannot show code because of NDA with PlayStation</p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Additional features include but are not limited to</p>
                    <ul>
                        <li>PC x64 build configuration</li>
                        <li>Researching an old code base</li>
                        <li>Making a diverse logger</li>
                        <li>Create a cross-platform timer</li>
                        <li>Abstracting windows dependend systems</li>
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
                    <h3>C programming</h3>
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
            <a href="https://github.com/Reemhi2122/InSheepsClothing" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Image0 from '/src/assets/Image/Portfolio/DR/img1.png'
import Image1 from '/src/assets/Image/Portfolio/DR/img2.png'
import Image2 from '/src/assets/Image/Portfolio/DR/img3.png'
import Image3 from '/src/assets/Image/Portfolio/DR/img1.png'
import Image4 from '/src/assets/Image/Portfolio/DR/img2.png'
import Image5 from '/src/assets/Image/Portfolio/DR/img3.png'

import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue';

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
            },     
            {
                src: Image5,
                index: 5
            }
            ],
        }
    },
    beforeMount() {
        this.$emit('OpenNavBar');
    },
    mounted() {
        this.IsMobile();
        window.addEventListener('resize', this.IsMobile);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.IsMobile);
    },
    methods: {
        IsMobile() {
            if (window.innerWidth <= 1000) {
                this.mobile = true
            } else {
                this.mobile = false
            }
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
    }
}
</script>

<style scoped>
.header-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/DR/Banner.png');
}

@media (max-width: 1000px) {
    .contribution-element-container {
        grid-template-rows: repeat(3, auto);
        grid-gap: 25px 5%;
    }
}
</style>>