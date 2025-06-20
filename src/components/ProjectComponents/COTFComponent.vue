<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Cry of the fox</h1>
                    <h2 class="header-subtitle">A true vertical slice</h2>
                </div>
            </div>

            <video class="project-video" poster="../../assets/Image/Portfolio/COTF/Test.webp" controls>
                <source src="/src/assets/Image/Portfolio/COTF/COTF.mp4" type="video/mp4">
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
                    <span class="material-symbols-outlined">calendar_month</span> 2021
                </div>
            </div>
        </div>

        <CarrouselComp :cards="this.images" class="carousel-comp"/>

        <p class="project-text">
            After a virus in the late 19th century takes out all humans on Earth, nature takes over again. You play as a
            fox who is all alone in an overgrown and abandoned Paris. As you travel to the edge of the city to find
            other foxes, you find out what really happened to the humans...
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
                    src="/src/assets/Image/Logos/Blueprint.png" title="C++" />
                    <p class="software-skill-title"> Language </p>
                    <p class="software-skill-text"> Blueprint </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" />
                    <p class="software-skill-title"> Language </p>
                    <p class="software-skill-text"> C++ </p>
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
                        The following wolf
                    </template>

                    <template v-slot:Image>
                        <ExpandableVideo class="contribution-image"
                        :src="this.contributionImages[0]" autoplay loop></ExpandableVideo>
                    </template>

                    <template v-slot:Text>
                        In the game, we wanted to create a thread for the player while
                        traversing the level. This is where we came up with the wolf that would hunt for the fox when it
                        would see it. I created this wolf with visual AI and movement AI. If the wolf would spot you, 
                        it would follow you, and depending on if it will catch you it will attack or lose interest.
                    </template>

                    <template v-slot:reason-no-code>
                        <p>*No code example due to blueprints</p>
                    </template>
                </CodeSnippetComponent>

                <div class="contribution-black-column"></div>

                <CodeSnippetComponent >
                    <template v-slot:Title>
                        The following bird
                    </template>

                    <template v-slot:Image>
                        <ExpandableVideo class="contribution-image"
                        :src="this.contributionImages[1]" autoplay loop></ExpandableVideo>
                    </template>

                    <template v-slot:Text>
                        We wanted an NPC to follow the player and show important parts of the
                        level to the player. Eventually, we decided this would be a bird that would fly around the player
                        when stationary, when the player would walk it would fly after it and would point out or sit at
                        important parts of the level.
                    </template>

                    <template v-slot:reason-no-code>
                        <p>*No code example due to blueprints</p>
                    </template>
                </CodeSnippetComponent>

                <div class="contribution-black-row"></div>

                <CodeSnippetComponent >
                    <template v-slot:Title>
                        Dialogue system
                    </template>

                    <template v-slot:Image>
                        <ExpandableVideo class="contribution-image"
                        :src="this.contributionImages[2]" autoplay loop></ExpandableVideo>
                    </template>

                    <template v-slot:Text>
                        As an objective, we decided that the player would get requests from
                        different animals to help them with something they need. If they did this they would get
                        something in return. For example, the bird could give him a key that he couldn't reach, but the
                        player had to do something for the bird first. I created the dialogue system for this.
                    </template>

                    <template v-slot:reason-no-code>
                        <p>*No code example due to blueprints</p>
                    </template>
                </CodeSnippetComponent>

                <div class="contribution-black-column"></div>

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
                    <h3>Gameplay programming</h3>
                    <p>As I want to become an engine programmer, it is also good to experience other disciplines of game
                        development. It helps understand what a game programmer expects from an engine and what the best
                        and most important features are to a gameplay programmer. In this case, I didn't have a choice
                        to be an engine programmer and this can happen in my feature career as well. This project
                        prepared me for when I was needed as a gameplay programmer.</p>
                </div>

                <div class="contribution-black-column"></div>

                <div class="learned-element">
                    <h3>Cross-discipline collaboration</h3>
                    <p>Working in a medium-sized team with multiple disciplines gives me the same experience as working
                        in an indie game development studio. I gained experience in planning, debating, working,
                        communicating, and delivering in such a team. We delivered two games (the other being Donut
                        Drifters). A common disagreement would be between design and the other variations, with things
                        we prototyped before they got designed and them reworking things after we made them.
                    </p>
                </div>

                <div class="contribution-black-row"></div>

                <div class="learned-element">
                    <h3>Unreal Engine 4</h3>
                    <p>
                        This was the second time I worked on a UE4 project, which was an exiting and big learning opportunity. 
                        I mostly used blueprints for this project but also looked into some C++ within UE4 because this 
                        was a goal of mine. Eventually, I got the hang of UE4 and was able to reliably create mechanics 
                        that are used throughout the game.
                    </p>
                </div>

                <div class="contribution-black-column"></div>

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

        <!-- <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/InSheepsClothing" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div> -->
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Image0 from '/src/assets/Image/Portfolio/COTF/img1.webp'
import Image1 from '/src/assets/Image/Portfolio/COTF/img2.webp'
import Image2 from '/src/assets/Image/Portfolio/COTF/img3.webp'
import Image3 from '/src/assets/Image/Portfolio/COTF/img4.webp'
import Image4 from '/src/assets/Image/Portfolio/COTF/img5.webp'
import Image5 from '/src/assets/Image/Portfolio/COTF/img6.webp'

import con0 from "/src/assets/Image/Portfolio/COTF/contributions/COTFWolf.mp4"
import con1 from "/src/assets/Image/Portfolio/COTF/contributions/COTFCrow.mp4"
import con2 from "/src/assets/Image/Portfolio/COTF/contributions/COTFDialogue.mp4"

import CodeSnippetComponent from '../IndividualComponents/CodeSnippetComponent.vue'
import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue'
import ExpandableVideo from '../IndividualComponents/ExpandableVideo.vue'
import ExpandableImage from '../IndividualComponents/ExpandableImage.vue'

export default {
    data() {
        return {
            name: 'COTF',
            url: "/src/assets/Image/Portfolio/COTF/Header.webp",
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
                con1,
                con2
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
                document.title = 'Stan Vogels | Cry Of The Fox';
            }
        },
    },
    components:{
        CarrouselComp,
        ExpandableVideo,
        ExpandableImage,
        CodeSnippetComponent,
    }
}
</script>

<style scoped>
.header-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/COTF/Header.webp');
}
</style>>