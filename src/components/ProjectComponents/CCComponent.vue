<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Cold Candy</h1>
                    <h2 class="header-subtitle">Puzzle game</h2>
                </div>
            </div>

            <!-- <video class="project-video" poster="../../assets/Image/Portfolio/CC/img4.png" controls>
                <source src="" type="video/mp4">
                Your browser does not support the video tag.
            </video> -->

            
            <iframe poster="../../assets/Image/Portfolio/CC/img4.png" class="project-video" width="420" height="315"
            src="https://www.youtube.com/embed/K4WDixP40vM">
            </iframe>

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
                    <span class="material-symbols-outlined">group</span> 12 members
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 8 weeks
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2021
                </div>
            </div>
        </div>

        <CarrouselComp :cards="this.images" class="carousel-comp"/>

        <p class="project-text">
            It's everybody's dream to be a kid in a candy factory. In cold candy you can make your dreams come true! Release your spirit animal to help solve puzzles and get candy!
        </p>

        <iframe class="itchio" frameborder="0" src="https://itch.io/embed/1037497?linkback=true&amp;border_width=5" width="560" height="175"><a href="https://buas.itch.io/coldcandy">
            Cold Candy by Breda University of Applied Sciences, Jip Crombag, martyrex, BountyVSGames, Holly_DNArt, 1GehaktBal1, RoselynPayne, Giralfe, Rick de Haan, Reemhi, Pipkadoodles, Veek, Dani Spaargaren</a>
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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" title="Jira" />
                    <p class="software-skill-title"> Planning </p>
                    <p class="software-skill-text"> Trello </p>
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
                <div class="contribution-element">
                    <p class="contribution-element-title">Pressure plate system</p>
                    <video class="contribution-image"
                        src="/src/assets/Image/Portfolio/CC/contributions/pressure_plate.mp4" autoplay loop></video>
                    <p class="contribution-text">
                        I created a pressure plate system where you can select an interactable, and link it to a pressure plate.
                        This link will ensure the pressure plate will activate the interaction defined on the interactable.
                        The pressure plate has multiple options on how you want to activate the interactable. These options include 
                        activation when pressed, keep activated on press, and time based on pressed. 
                        <br><br>
                        The interactables and pressure 
                        plates have different styling options, that the designer can change like the size of the dispenser shown in 
                        the videos and the indicator and styling of the pressure plate changed by the function.
                    </p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Moving platform tool</p>
                    <video class="contribution-image"
                        src="/src/assets/Image/Portfolio/CC/contributions/platform_moving.mp4" autoplay loop></video>
                    <p class="contribution-text">
                        The moving platform was created to elevate the player to new positions and create cool puzzles. 
                        But we needed a system where the designers could change all the properties dynamically. 
                        So I created a platform system where the designers could adjust the path, speed, design, and waiting 
                        time on return. It could also be linked to a pressure plate like all the other interactables to start 
                        it on activation.
                        <br><br>
                        I also had to make sure the player could correctly interact with the platform, pushing the player instead 
                        of going through it. And detect when it would crush the player. This would respawn the player to the 
                        starting position.
                    </p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Pipe tool</p>
                    <video class="contribution-image"
                        src="/src/assets/Image/Portfolio/CC/contributions/pipe.mp4" autoplay loop></video>
                    <p class="contribution-text">
                        The pipe tool was created to provide clarity for the player, so the player could see what the 
                        pressure plate is attached to and indicate if it's activated. I created this tool with the 
                        spline tool integrated into UE4 so the designers and artists could adjust the pipes themself 
                        and change them during playtesting. Later we also added the timer element, which would slowly 
                        fill up the pipe until the timer is up, then it would drain again.
                    </p>
                </div>
                <div class="contribution-element">
                    <p class="contribution-element-title">Cube moving / selecting</p>
                    <video class="contribution-image"
                        src="/src/assets/Image/Portfolio/CC/contributions/cube.mp4" autoplay loop></video>
                    <p class="contribution-text">
                        The most important mechanic to get right was to move the block and drag it around the level. 
                        This had to feel right to make the game feel good. I worked on the range and selecting, and 
                        following the cursor. This came with some interesting challenges involving physics in UE4. 
                        After a lot of playtesting and talking to the designers, we got the mechanic down with some 
                        forgiveness in dragging.
                    </p>
                </div>
            </div>
        </section>

        <section class="team-section">
            <h2 class="section-header">The team</h2>
            <div class="basic-info">
                <p>Team size: 12 developers</p>
                <p>Programmers: 4 | Artists: 4 | Designers: 4
                </p>
            </div>
            <div class="team-container">
                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Ralph Warrand | Programmer</p>
                            <a href="https://www.linkedin.com/in/ralph-warrand-6529a81a4/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Stan Vogels | Programmer</p>
                            <a href="https://www.linkedin.com/in/stanvogels/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Boudewijn Witteveen | Programmer</p>
                            <a href="https://www.linkedin.com/in/boudewijn-w-2bbb79131/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Pepijn van Loon | Programmer</p>
                            <a href="https://www.linkedin.com/in/pepijn-van-loon-6795aa257/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Olimpia Di Nella | Artist</p>
                            <a href="https://www.linkedin.com/in/olimpiadinella/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Anne Teunissen | Artist</p>
                            <a href="https://www.linkedin.com/in/anne-teunissen-013186161/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Dani Spaargaren | Artist</p>
                            <a href="https://www.linkedin.com/in/dani-spaargaren-b78518159/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Roselyn Payne | Artist</p>
                            <a href="https://www.linkedin.com/in/roselyn-payne-7374101b2/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Jip Crombag | Designer</p>
                            <a href="https://www.linkedin.com/in/jip-crombag/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Rick de Haan | Designer</p>
                            <a href="https://www.linkedin.com/in/rick-de-haan-789a0a17a/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Victor Stanciu | Designer</p>
                            <a href="https://www.linkedin.com/in/victor-stanciu-82416b16a/" target="_blank"><img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Martin Vetsin | Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="learned-section">
            <h2 class="section-header">What I have learned form this project</h2>
            <div class="learned-container">
                <div class="learned-element">
                    <h3>Creating tools for designers</h3>
                    <p>
                        Creating tools for designers is a valuable skill in unreal engine 4. These tools, 
                        such as moving platform systems and pressure plate systems, allow designers to 
                        create complex game mechanics and environments without needing extensive programming 
                        knowledge. By creating these tools, I gained experience in using Unreal Engine 4's 
                        various systems and APIs. Additionally, creating tools for designers improved my 
                        problem-solving skills and improve my ability to communicate with other members of a 
                        game development team.
                    </p>
                </div>
                <div class="learned-element">
                    <h3>Cross discipline collaboration</h3>
                    <p>
                        Collaborating with a team of 3 programmers, 4 designers, and 4 artists provided me 
                        with a realistic experience of indie game development. Working with different 
                        disciplines required effective planning and communication. I had to assist 
                        designers with tool setup and work with artists to import assets correctly. This
                         valuable experience taught me to work effectively in a multidisciplinary team environment.
                    </p>
                </div>
                <div class="learned-element">
                    <h3>Unreal Engine 4</h3>
                    <p>
                        My first project using Unreal Engine 4 taught me valuable skills on working with C++
                        and Blueprint-based engines. I learned a lot about working in Unreal Engine 4 and gained
                        insights into creating games with it. Although Unreal Engine 5 was not available at 
                        the time of the project, the skills I aquired when working in UE4 have been useful 
                        for later project in UE5.
                    </p>
                </div>
            </div>
        </section>

        <iframe class="itchio" frameborder="0" src="https://itch.io/embed/1037497?linkback=true&amp;border_width=5" width="560" height="175"><a href="https://buas.itch.io/coldcandy">
            Cold Candy by Breda University of Applied Sciences, Jip Crombag, martyrex, BountyVSGames, Holly_DNArt, 1GehaktBal1, RoselynPayne, Giralfe, Rick de Haan, Reemhi, Pipkadoodles, Veek, Dani Spaargaren</a>
        </iframe>
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Image0 from '/src/assets/Image/Portfolio/CC/img0.png'
import Image1 from '/src/assets/Image/Portfolio/CC/img1.png'
import Image2 from '/src/assets/Image/Portfolio/CC/img2.png'
import Image3 from '/src/assets/Image/Portfolio/CC/img3.png'
import Image4 from '/src/assets/Image/Portfolio/CC/img4.png'
import Image5 from '/src/assets/Image/Portfolio/CC/img5.png'
import Image6 from '/src/assets/Image/Portfolio/CC/img6.png'
import Image7 from '/src/assets/Image/Portfolio/CC/img7.png'

import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue';

export default {
    data() {
        return {
            name: 'CC',
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
            },
            {
                src: Image6,
                index: 6
            },            
            {
                src: Image7,
                index: 7
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
                document.title = 'Stan Vogels | Cry Of The Fox';
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/CC/CCHeader.jpg');
}

@media (max-width: 1000px) {
    .contribution-element-container {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, auto);
        grid-gap: 25px 5%;
    }
}
</style>>