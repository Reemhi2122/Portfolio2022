<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Cry Of The Fox</h1>
                    <h2 class="header-subtitle">A true vertical slice</h2>
                </div>
            </div>

            <video class="project-video" poster="../../assets/Image/Portfolio/COTF/Test.png" controls>
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
                    <span class="material-symbols-outlined">calendar_month</span> 2020
                </div>
            </div>

            <!-- <div v-if="!this.mobile" class="see-more-div">
                <h1>See more</h1>
                <img src="/src/assets/Image/Logos/SeeMoreImage.svg" />
            </div> -->
        </div>

        <p class="project-text">
            After a virus in the late 19th century takes out all humans on earth, nature takes over again. You play as a
            fox who is all alone in an overgrown and abandoned Paris. As you travel to the edge of the city to find
            other foxes, you find out what really happened to the humans…​
        </p>

        <section class="software-skills">
            <h2 class="section-header">Software skills improved this project</h2>
            <div class="software-skills-icons">
                <img class="software-skill-element"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    title="C++" />
                <img class="software-skill-element"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg"
                    title="Unreal Engine" />
                <img class="software-skill-element"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" title="Jira" />
                <img class="software-skill-element" src="../../assets/Image/Logos/Perforce.png" title="Perforce" />
            </div>
        </section>

        <section class="contribution-section">
            <h2 class="section-header">What I contributed to the project</h2>
            <div class="contribution-element-container">
                <div class="contribution-element">
                    <p class="contribution-element-title">Following wolf</p>
                    <video class="contribution-image"
                        src="/src/assets/Image/Portfolio/COTF/contributions/FollowingAI.mp4" autoplay loop></video>
                    <p class="contribution-text">In the game, we wanted to create a thread for the player while
                        traversing the level. This is where we came up with the wolf that would hunt for the fox when it
                        would see it. I created this wolf with visual AI and movement AI. If the wolf would spot you, it
                        would follow you and depending if it will catch you it will attack or lose interest.
                    </p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Following bird</p>
                    <img class="contribution-image"
                        src="/src/assets/Image/Portfolio/COTF/contributions/FollowingNPC.gif">
                    <p class="contribution-text">We wanted a NPC to follow the player and show important parts of the
                        level to the player. eventually we decided this would be a bird that would fly around the player
                        when stationary, when the player would walk it would fly after it and would point out or sit at
                        important parts of the level.
                    </p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Dialogue system</p>
                    <img class="contribution-image"
                        src="/src/assets/Image/Portfolio/COTF/contributions/DialogueSystem.gif">
                    <p class="contribution-text">As an objective we decided that the player would get requests from
                        different animals to help them with something they need. If they did this they would get
                        something in return. For example the bird could give him a key that he couldn't reach, but the
                        player had to do something for the bird first. I created the dialogue system for this.
                    </p>
                </div>
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
                            <a href="https://www.linkedin.com/in/lucas-zebeda-347872229/"><img
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
                            <a href="https://www.linkedin.com/in/stanvogels/"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Luuk Ouwehand | Artist</p>
                            <a href="https://www.linkedin.com/in/luuk-ouwehand-74b837244/"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                        <p class="team-portfolio"><a
                                href="https://www.artstation.com/luukouwehand">https://www.artstation.com/luukouwehand</a>
                        </p>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Olivier Dral | Artist</p>
                            <a href="https://www.linkedin.com/in/olivierdral/"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                        <p class="team-portfolio"><a
                                href="https://oli4dral.artstation.com/">https://oli4dral.artstation.com/</a></p>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Nathalie Stuit | Artist</p>
                            <a href="https://www.linkedin.com/in/nathalie-stuit-38250124b/"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Radu Nenu | Designer</p>
                            <a href="https://www.linkedin.com/in/radu-nicolae-nenu-0482901ba/"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Lucas Dane | Designer</p>
                            <a href="https://www.linkedin.com/in/lucas-dane-700494150/"><img
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
            <a href="https://github.com/Reemhi2122/InSheepsClothing"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>
        <section class="empty-footer"></section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'COTF',
            url: "/src/assets/Image/Portfolio/COTF/Header.png",
            mobile: false,
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
                document.title = 'Stan Vogels | Cry Of The Fox';
            }
        },
    }
}
</script>

<style scoped>
.header-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/COTF/Header.png');
}

@media (max-width: 1000px) {
    .contribution-element-container {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, auto);
        grid-gap: 25px 5%;
    }
}
</style>>