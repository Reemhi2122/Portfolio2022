<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Gudenuff Engine - Setsuko</h1>
                    <h2 class="header-subtitle">Game created in custom engine</h2>
                </div>
            </div>

            <video class="project-video" poster="../../assets/Image/Portfolio/GE/GEHeader.webp" controls>
                <source src="/src/assets/Image/Portfolio/GE/GETrailer.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div class="indv-project-bubbles-container">
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Generalist programmer
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">code</span> C++
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">build</span> Custom Engine
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">group</span>12 members
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 8 weeks
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2022
                </div>
            </div>
        </div>

        <CarrouselComp :cards="this.images" class="carousel-comp"/>

        <p class="project-text">
            Drums of Harmony is a 2D rhythm-based roguelike, where you as a spirit bard are trying 
            to cleanse evil Yokai in order to save your village from mysterious creatures.
            Play as a spirit bard that can move, 
            shoot and collect to deal with enemies and clear rooms, levels, and zones...
        </p>

        <iframe class="itchio" frameborder="0" src="https://itch.io/embed/1572705?linkback=true" width="552" height="167"><a href="https://buas.itch.io/gudenuff-drumsofharmony">
            Setsuko: Drums of Harmony by Breda University of Applied Sciences, Piinda, Clockweiz, lamci, Reemhi, Marivahlio, NeoSup, lyubomir_kostadinov, Alucard</a>
        </iframe>
        
        <section class="software-skills">
            <h2 class="section-header">Software skills improved this project</h2>
            <div class="software-skills-icons">
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" />
                    <p class="software-skill-title"> Language </p>
                    <p class="software-skill-text"> C++ </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="/src/assets/Image/Portfolio/GE/Engine_Logo.png" title="GE Engine" />
                    <p class="software-skill-title"> Engine </p>
                    <p class="software-skill-text"> GE Engine </p>
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

                <CodeSnippetComponent hascode="true">
                    <template v-slot:Title>
                        Combat System
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image" :src="this.contributionImages[0]"/>
                    </template>

                    <template v-slot:Text>
                        When the player walks inside a room that is defined by a door 
                        and an enclosed area with trees. We wanted the player to enter 
                        a combat state. In this state, the doors would close with fire 
                        blocking their way out. And The player would enter a state where it 
                        can only move or attack on the beat visualized by a beat matcher 
                        spawned at the same time. The tricky part was to check if the 
                        player entered the room. Once all the enemies were killed, the 
                        room would open up again.
                    </template>

                    <template v-slot:Code>
                        <code0/>
                    </template>
                </CodeSnippetComponent>

                <div class="contribution-black-column"></div>
                
                <CodeSnippetComponent >
                    <template v-slot:Title>
                        Enemy spawning
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image" :src="this.contributionImages[1]"/>
                    </template>

                    <template v-slot:Text>
                        I was responsible for the spawning of all the enemies once the player enters 
                        the room. This was part of the combat system but used different systems. 
                        We had a tools programmer who made a map generation tool where I had to 
                        read out the enemy's locations and spawn the enemies at the correct location. 
                        Also keeping track of if they are alive to then open the room.
                    </template>
                </CodeSnippetComponent>
                
                <div class="contribution-black-row"></div>

                <CodeSnippetComponent hascode="true">
                    <template v-slot:Title>
                        Weapon creation tool
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image" :src="this.contributionImages[2]"/>
                    </template>

                    <template v-slot:Text>
                        We wanted a dynamic way of adjusting weapons in the game. For this, I made 
                        an editor for the engine to create multiple weapons fast. Sadly, this got 
                        discontinued because we wanted to simplify the weapon system to get it done 
                        in time. But I learned a lot from this experience, I created this in the first 
                        1/2 weeks and learned how to quickly get to know a new code base like a custom engine. 
                    </template>

                    <template v-slot:Code>
                        <code1/>
                    </template>
                </CodeSnippetComponent>

                <div class="contribution-black-column"></div>

                <CodeSnippetComponent hascode="true">
                    <template v-slot:Title>
                        Crumbling tile
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image" :src="this.contributionImages[3]"/>
                    </template>

                    <template v-slot:Text>
                        I was also involved in creating some of the traps for the game. 
                        This was managed using a trap system, and I had to create the crumbling trap. 
                        This trap would be walkable at first, but once you walked over it becomes a hole 
                        that is not walkable. For this, a new trigger had to be created for when the 
                        player left the tile, instead of the already existing tile events.
                    </template>

                    <template v-slot:Code>
                        <code2/>
                    </template>
                </CodeSnippetComponent>

                <div class="contribution-black-row"></div>

                <CodeSnippetComponent>
                    <template v-slot:Title>
                        Additional features include but are not limited to
                    </template>

                    <template v-slot:Text>
                        <ul>
                            <li>Enemy pattern</li>
                            <li>Scene transition</li>
                            <li>Rotation for preset levels</li>
                            <li>Fixing enemy attack</li>
                        </ul>
                    </template>
                </CodeSnippetComponent>

                <div class="contribution-black-column hide-on-small"></div>
            </div>
        </section>

        <section class="team-section">
            <h2 class="section-header">The team</h2>
            <div class="basic-info">
                <p>Team size: 12 developers</p>
                <p>Programmers: 8 | Artists: 2 | Designers: 2
                </p>
            </div>
            <div class="team-container">
                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Lex Roovers | Programmer</p>
                            <a href="https://www.linkedin.com/in/lex-roovers/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Kylian Dekker | Programmer</p>
                            <a href="https://www.linkedin.com/in/kylian-dekker-26957015b/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Martijn Vahl | Programmer</p>
                            <a href="https://www.linkedin.com/in/martijnvahl/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Justin Kujawa | Programmer</p>
                            <a href="https://www.linkedin.com/in/justin-kujawa-37094718a/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Slava Takrovskij | Programmer</p>
                            <a href="https://www.linkedin.com/in/slava-takrovskij-21b7691b7/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Lyobomir Kostadinov | Programmer</p>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Sam Boots | PR lead / programmer</p>
                            <a href="https://www.linkedin.com/in/sam-boots-7b256b15b/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Stan Vogels | Programmer</p>
                            <a href="https://www.linkedin.com/in/maria-ioannou-0898841b8/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                </div>

                <div class="team-container-box">
                    <div class="team-element">
                        <div class="team-name">
                            <p>Maria Ioannou | Artist</p>
                            <a href="https://www.linkedin.com/in/maria-ioannou-0898841b8/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>
                    <div class="team-element">
                        <div class="team-name">
                            <p>Rembrandt van Leeuwen | Artist</p>
                            <a href="https://www.linkedin.com/in/rembrandt-van-leeuwen-968801a1/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Wesley Cats | Producer</p>
                            <a href="https://www.linkedin.com/in/wesley-cats-games/" target="_blank"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        </div>
                    </div>

                    <div class="team-element">
                        <div class="team-name">
                            <p>Luca Yavuzok | Design Lead</p>
                            <a href="https://www.linkedin.com/in/luca-yavuzok-04067815b/" target="_blank"><img
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
                    <h3>Working in a custom engine</h3>
                    <p>
                        Before this project, I worked in engines like Unity, Unreal Engine and I even created engines
                        myself. But working in a custom engine created by another team, getting to know the code base of a custom engine
                        and improve it where nessesary taught me a lot about reading code bases and adapting to new systems.
                    </p>
                </div>

                <div class="contribution-black-column"></div>

                <div class="learned-element">
                    <h3>Working with a producer</h3>
                    <p>
                        This was the first project where I worked with a dedicated producer to manage the planning, 
                        making sure everyone kept to the planning, and that we were working in an efficient workflow. 
                        This included doing extensive burndowns after every sprint, good sprint planning, and daily updates. 
                        I enjoyed having a producer in the team so I could focus myself on programming.
                    </p>
                </div>

                <div class="contribution-black-row"></div>

                <div class="learned-element">
                    <h3>ECS system</h3>
                    <p>
                        Working in an engine which uses an ECS system was really interesting to me. I have created my own
                        ECS system before but never actually created an engine with this system. After using the system designed
                        by my peers I got really excited to implement my own version of an ECS system in my own custom engine.
                    </p>
                </div>

                <div class="contribution-black-column hide-on-small"></div>
            </div>
        </section>

        <iframe class="itchio" frameborder="0" src="https://itch.io/embed/1572705?linkback=true" width="552" height="167"><a href="https://buas.itch.io/gudenuff-drumsofharmony">
            Setsuko: Drums of Harmony by Breda University of Applied Sciences, Piinda, Clockweiz, lamci, Reemhi, Marivahlio, NeoSup, lyubomir_kostadinov, Alucard</a>
        </iframe>
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-csharp';

import Image0 from '/src/assets/Image/Portfolio/GE/img8.webp'
import Image1 from '/src/assets/Image/Portfolio/GE/img0.webp'
import Image2 from '/src/assets/Image/Portfolio/GE/img1.webp'
import Image3 from '/src/assets/Image/Portfolio/GE/img2.webp'
import Image4 from '/src/assets/Image/Portfolio/GE/img3.webp'
import Image5 from '/src/assets/Image/Portfolio/GE/img4.webp'
import Image6 from '/src/assets/Image/Portfolio/GE/img5.webp'
import Image7 from '/src/assets/Image/Portfolio/GE/img6.webp'
import Image8 from '/src/assets/Image/Portfolio/GE/img7.webp'

import con0 from "/src/assets/Image/Portfolio/GE/contributions/GifCombatSystem.gif";
import con1 from "/src/assets/Image/Portfolio/GE/contributions/GifEnemySpawning.gif";
import con2 from "/src/assets/Image/Portfolio/GE/contributions/GifWeaponCreationTool.gif";
import con3 from "/src/assets/Image/Portfolio/GE/contributions/GifCrumbling.gif";

import code0 from "../CodeSnippets/GE/Code0.vue"
import code1 from "../CodeSnippets/GE/Code1.vue"
import code2 from "../CodeSnippets/GE/Code2.vue"

import CodeSnippetComponent from '../IndividualComponents/CodeSnippetComponent.vue'
import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue';
import ExpandableImage from '../IndividualComponents/ExpandableImage.vue'


export default {
    data() {
        return {
            name: 'GE',
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
            },
            {
                src: Image8,
                index: 8
            }
            ],
            contributionImages: [
                con0,
                con1,
                con2,
                con3
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
                document.title = 'Stan Vogels | Gudenuff Engine - Setsuko';
            }
        },
    },
    components:{
        CarrouselComp,
        ExpandableImage,
        CodeSnippetComponent,
        code0,
        code1,
        code2
    }
}
</script>

<style scoped>
.header-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/GE/banner.webp');
}
</style>