<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Raytracer</h1>
                    <h2 class="header-subtitle">Creating a custom raytracer</h2>
                </div>
            </div>

            <video class="project-video" poster="../../assets/Image/Portfolio/RT/Raytracer.jpg" controls>
                <source src="/src/assets/Image/Portfolio/RT/Raytracervid.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div class="indv-project-bubbles-container">
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Gameplay programmer
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">code</span> Blueprint
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">build</span> Unreal engine
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">group</span> 8 members
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 3 weeks
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2021
                </div>
            </div>
        </div>

        <CarrouselComp :cards="this.images" class="carousel-comp"/>

        <p class="project-text">
            Fight against your friends on a donut in space! Try to collect as many stars while
            avoiding falling obstacles before the time runs out. But watch out, when you get pushed
            off by your opponement you lose all your stars.
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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" />
                    <p class="software-skill-text">
                        This project was made in blueprints and C++,
                        this was my first experience in C++ in unreal engine
                        and it proved to be quite the challenge. After the project
                        I felt comfortable with C++ in UE.                        
                    </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg" title="Unreal Engine" />
                    <p class="software-skill-text">
                        This project was made in Unreal Engine and even
                        though I had some previous experience I still had
                        A lot to learn. This project gave me more insights
                        in things like UE AI and C++. 
                    </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" title="Jira" />
                    <p class="software-skill-text">
                        This was the first project that I used Jira
                        to plan our sprints. I really liked the experience
                        and plan to use it more often. Having your personal
                        dashboard to keep an eye on your own process besides
                        the whole team was really usefull.
                    </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="/src/assets/Image/Logos/Perforce.png" title="Perforce" />
                    <p class="software-skill-text">
                        This project we used Perforce as was 
                        standard on our school. This block I used
                        some new features in Perforce and got better.
                    </p>
                </div>
            </div>
        </section>

        <section class="contribution-section">
            <h2 class="section-header">What I contributed to the project</h2>
            <div class="contribution-element-container">
                <div class="contribution-element">
                    <p class="contribution-element-title">Obstacle spawner tool</p>
                    <img class="contribution-image"
                        src="/src/assets/Image/Portfolio/DD/contributions/Spawner.gif">
                    <p class="contribution-text">For this game, I created an obstacle spawner tool that the
                        designers in my team could use by adjusting all the settings. This tool was used for the
                        falling obstacles, the stars and the powerups. All of these mechanics are seperate spawners
                        that they adjusted to have different amount of spawn points, different heights and how much
                        they encapsulate the donut.
                    </p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Obstacle gravity</p>
                    <img class="contribution-image"
                        src="/src/assets/Image/Portfolio/DD/contributions/Gravity.gif">
                    <p class="contribution-text">Because the level was a donut, it was a challenge to make the
                        gravity system for it. What I did to make it work was calculate a circle in the middle of the
                        donut and calculate the nearest point for every object that was falling towards the donut. Then
                        I just moved the object towards this nearest point, which looked like realistic gravity behaviour.
                    </p>
                </div>
            </div>
        </section>

        <section class="learned-section">
            <h2 class="section-header">What I have learned form this project</h2>
            <div class="learned-container">
                <div class="learned-element">
                    <h3>Gameplay programming</h3>
                    <p>As I want to become a engine programmer, it is also good to experience other disciplines of game
                        development. It helps understand what a game programmer expects from an engine and what the best
                        and most important features are to an gameplay programmer. In this case, I didn't have a choice
                        to be an engine programmer and this can happen in my feature career as well. This project
                        prepared me for when I was needed as a gameplay programmer.</p>
                </div>
                <div class="learned-element">
                    <h3>Cross discipline collaboration</h3>
                    <p>Working in a medium sized team with multiple disciplines give me the same experience as working
                        in an indie game development studio. I gained experience in planning, debating, working,
                        communicating and delivering in such a team. We delivered two games (other being Donut
                        Drifters). A common disagreement would be between design and the other variations, with things
                        we prototyped before they got designed and them reworking things after we made them.
                    </p>
                </div>
                <div class="learned-element">
                    <h3>Unreal Engine 4</h3>
                    <p>This was the second time I worked on a UE4 project, which was exiting and big learning
                        opportunity. I mostly used blueprints this project, but also looked into some C++ within UE4
                        because this was a goal of mine. Eventually I got the hang of UE4 and was able to reliably
                        create mechanics that are used throughout the game.</p>
                </div>
                <div class="learned-element">
                    <h3>Game marmalade</h3>
                    <p>
                        This was my first time working on a game marmalade structure. This means working on a game for
                        around 2 weeks, so its bigger than a game jam but it still limits time. This, together with an
                        indie sized team created a unique form of fast concepting and teamwork. Big decisions had to be
                        cut quickly and there was barley any time for prototyping. Eventually, we spend to much time on
                        creating the level and lacked some gameplay.
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
import Image0 from '/src/assets/Image/Portfolio/RT/RT1.jpg'
import Image1 from '/src/assets/Image/Portfolio/RT/RT2.jpg'
import Image2 from '/src/assets/Image/Portfolio/RT/RT3.jpg'
import Image3 from '/src/assets/Image/Portfolio/RT/RT4.jpg'
import Image4 from '/src/assets/Image/Portfolio/RT/RT5.jpg'
import Image5 from '/src/assets/Image/Portfolio/RT/RT6.jpg'
import Image6 from '/src/assets/Image/Portfolio/RT/Raytracer.jpg'

import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue';

export default {
    data() {
        return {
            name: 'DD',
            mobile: false,
            images: [
            {
                src: Image6,
                index: 0
            },            
            {
                src: Image0,
                index: 1
            },
            {
                src: Image1,
                index: 2
            },
            {
                src: Image2,
                index: 3
            },
            {
                src: Image3,
                index: 4
            },            
            {
                src: Image4,
                index: 5
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/DD/DDFront.jpg');
}

@media (max-width: 1000px) {
    .contribution-element-container {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, auto);
        grid-gap: 25px 5%;
    }
}
</style>>