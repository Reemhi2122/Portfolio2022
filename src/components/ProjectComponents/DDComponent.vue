<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Donut Drifters</h1>
                    <h2 class="header-subtitle">Arcade fun in 3 weeks</h2>
                </div>
            </div>

            <video class="project-video" poster="../../assets/Image/Portfolio/DD/DDImage.webp" controls>
                <source src="/src/assets/Image/Portfolio/DD/DDVid.mp4" type="video/mp4">
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
                    <span class="material-symbols-outlined">schedule</span> 2 weeks
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

        <iframe class="itchio" src="https://itch.io/embed/1309796" width="552" height="167" frameborder="0"><a href="https://nradu.itch.io/donut-drifters">
            Donut Drifters by Radu Nenu, Olivier Dral</a>
        </iframe>

        <section class="software-skills">
            <h2 class="section-header">Software skills improved this project</h2>
            <div class="software-skills-icons">
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="/src/assets/Image/Logos/blueprint.png" title="C++" />
                    <p class="software-skill-title"> Language </p>
                    <p class="software-skill-text"> Blueprint </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg" title="Unreal Engine" />
                    <p class="software-skill-title"> Engine </p>
                    <p class="software-skill-text"> Unreal Engine </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" title="Jira" />
                    <p class="software-skill-title"> Planning </p>
                    <p class="software-skill-text"> Jira </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="/src/assets/Image/Logos/Perforce.png" title="Perforce" />
                    <p class="software-skill-title"> Source control </p>
                    <p class="software-skill-text"> Perforce </p>
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
            <h2 class="section-header">What I contributed to the project</h2>
            <div class="contribution-element-container">
                
                <CodeSnippetComponent >
                    <template v-slot:Title>
                        Obstacle spawner tool
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image"
                        :src="this.contributionImages[0]"/>
                    </template>

                    <template v-slot:Text>
                        For this game, I created an obstacle spawner tool that the
                        designers in my team could use by adjusting all the settings. This tool was used for the
                        falling obstacles, the stars and the powerups. All of these mechanics are seperate spawners
                        that they adjusted to have different amount of spawn points, different heights and how much
                        they encapsulate the donut.
                    </template>

                    <template v-slot:reason-no-code>
                        <p>*No code example due to blueprints</p>
                    </template>
                </CodeSnippetComponent>
                    <!-- <iframe class="blueprint-snippet" src="https://blueprintue.com/render/-mk9b3hz/" scrolling="no" allowfullscreen></iframe> -->

                <div class="contribution-black-column"></div>

                <CodeSnippetComponent>
                    <template v-slot:Title>
                        Obstacle gravity
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image"
                        :src="this.contributionImages[1]"/>
                    </template>

                    <template v-slot:Text>
                        Because the level was a donut, it was a challenge to make the gravity system for it. 
                        What I did to make it work was calculate a circle in the middle of the donut and 
                        calculate the nearest point for every object that was falling towards the donut. 
                        Then I just moved the object towards the nearest point, which looked like realistic 
                        gravity behavior.
                    </template>

                    <template v-slot:reason-no-code>
                        <p>*No code example due to blueprints</p>
                    </template>
                </CodeSnippetComponent>
                <!-- <iframe class="blueprint-snippet" src="https://blueprintue.com/render/h42a_63a/" scrolling="no" allowfullscreen></iframe> -->
            </div>
        </section>

        <section class="team-section">
            <h2 class="section-header">The team</h2>
            <div class="basic-info">
                <p>Team size: 8 developers</p>
                <p>Programmers: 3 | Artists: 3 | Designers: 2
                </p>
            </div>
            <div class="team-container">
                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Lucas Zebeda | Programmer</p>
                            <a href="https://www.linkedin.com/in/lucas-zebeda-347872229/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Jimmy Konings | Programmer</p>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Stan Vogels | Programmer</p>
                            <a href="https://www.linkedin.com/in/stanvogels/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Luuk Ouwehand | Artist</p>
                            <a href="https://www.linkedin.com/in/luuk-ouwehand-74b837244/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                        <p class="team-portfolio"><a
                                href="https://www.artstation.com/luukouwehand" target="_blank">https://www.artstation.com/luukouwehand</a>
                        </p>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Olivier Dral | Artist</p>
                            <a href="https://www.linkedin.com/in/olivierdral/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                        <p class="team-portfolio"><a
                                href="https://oli4dral.artstation.com/" target="_blank">https://oli4dral.artstation.com/</a></p>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Nathalie Stuit | Artist</p>
                            <a href="https://www.linkedin.com/in/nathalie-stuit-38250124b/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Radu Nenu | Designer</p>
                            <a href="https://www.linkedin.com/in/radu-nicolae-nenu-0482901ba/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Lucas Dane | Designer</p>
                            <a href="https://www.linkedin.com/in/lucas-dane-700494150/" target="_blank"><img
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
                    <h3>Fast concepting and prototyping</h3>
                    <p>
                        Because we only had two weeks for this project, we needed to create a concept fast which looked like
                        the process of a game jam but in a team of 8 people. After getting the concept, the production phase
                        looked more like a fast prototyping phase where we quickly created tools and blueprints to create a 
                        working and adjustable game. Even though we only had two weeks for this project, we got some tooling in 
                        for the designers.</p>
                </div>

                <div class="contribution-black-column"></div>

                <div class="learned-element">
                    <h3>Cross-discipline collaboration</h3>
                    <p>Working in a medium-sized team with multiple disciplines gave me the same experience as working
                        in an indie game development studio. I gained experience in planning, debating, working,
                        communicating, and delivering in such a team. We delivered two games (the other being Donut
                        Drifters). A common disagreement would be between design and the other variations, with things
                        we prototyped before they got designed and them reworking things after we made them.
                    </p>
                </div>

                <div class="contribution-black-row"></div>

                <div class="learned-element">
                    <h3>Tool creation in UE4</h3>
                    <p>
                        This was the first project where I created reusable tools in UE4. As you can see in the contrubtions above, 
                        I created a tool where you could set spawning positions around a thorus. This was usefull because we had three
                        different spawnables, which all needed different configurations. After explaining the tool to designers they could 
                        adjust all the settings while playtesting.
                    </p>
                </div>

                <div class="contribution-black-column"></div>

            </div>
        </section>

        <iframe class="itchio" src="https://itch.io/embed/1309796" width="552" height="167" frameborder="0"><a href="https://nradu.itch.io/donut-drifters">
            Donut Drifters by Radu Nenu, Olivier Dral</a>
        </iframe>
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Image0 from '/src/assets/Image/Portfolio/DD/img1.webp'
import Image1 from '/src/assets/Image/Portfolio/DD/img2.webp'
import Image2 from '/src/assets/Image/Portfolio/DD/img3.webp'
import Image3 from '/src/assets/Image/Portfolio/DD/img4.webp'
import Image4 from '/src/assets/Image/Portfolio/DD/img5.webp'

import con0 from "/src/assets/Image/Portfolio/DD/contributions/Spawner.gif"
import con1 from "/src/assets/Image/Portfolio/DD/contributions/Gravity.gif"

import CodeSnippetComponent from '../IndividualComponents/CodeSnippetComponent.vue'
import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue'
import ExpandableImage from '../IndividualComponents/ExpandableImage.vue'

export default {
    data() {
        return {
            name: 'DD',
            images: [
            {
                src: Image4,
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
                document.title = 'Stan Vogels | Donut Drifters';
            }
        },
    },
    components:{
        CarrouselComp,
        ExpandableImage,
        CodeSnippetComponent,
    }
}
</script>

<style scoped>
.header-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/DD/DDFront.webp');
}

</style>