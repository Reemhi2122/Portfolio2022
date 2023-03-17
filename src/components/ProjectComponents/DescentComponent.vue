<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Descent raytraced</h1>
                    <h2 class="header-subtitle">Descent (1995) but raytraced</h2>
                </div>
            </div>

            <video class="project-video" poster="../../assets/Image/Portfolio/DR/img1.png" controls>
                <source src="/src/assets/Image/Portfolio/DR/DescentTrailer.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div class="indv-project-bubbles-container">
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Gameplay programmer
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">code</span> C++ / Blueprint
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">build</span> Unreal engine
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
            </div>
        </div>

        <CarrouselComp :cards="this.images" class="carousel-comp"/>

        <p class="project-text">
            Discover the reworked Descent, now with raytracing technology. Experience
            dynamic light and shadow, highly reflective surfaces, and intense, fast-paced action like never before.
            Immerse yourself in a world brought to life with advanced graphics.
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
                    <p class="contribution-element-title">PS5 configuration / building</p>
                    <!-- <video class="contribution-image"
                        src="/src/assets/Image/Portfolio/COTF/contributions/FollowingAI.mp4" autoplay loop></video> -->
                    <p class="contribution-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Converting Descent from PC to PS5 </p>
                    <!-- <img class="contribution-image"
                        src="/src/assets/Image/Portfolio/COTF/contributions/FollowingNPC.gif"> -->
                    <p class="contribution-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">PS5 reading / writing</p>
                    <!-- <img class="contribution-image" 
                        src="/src/assets/Image/Portfolio/COTF/contributions/DialogueSystem.gif"> -->
                    <p class="contribution-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="learned-element">
                    <h3>Reading old code bases</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div class="learned-element">
                    <h3>Converting old games</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="learned-element">
                    <h3>C programming</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/DR/descentLogo.png');
}

@media (max-width: 1000px) {
    .contribution-element-container {
        grid-template-rows: repeat(3, auto);
        grid-gap: 25px 5%;
    }
}
</style>>