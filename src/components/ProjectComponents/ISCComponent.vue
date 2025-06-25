<template>
  <div class="project-container">
    <div class="front-page">
      <div class="header-background">
        <div class="header-text">
          <h1 class="header-title">In sheep's clothing</h1>
          <h2 class="header-subtitle">GameJam turned into full game</h2>
        </div>
      </div>

      <video class="project-video" poster="../../assets/Image/Portfolio/ISC/Header.webp" controls>
        <source src="/src/assets/Image/Portfolio/ISC/InSheepsClothing.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <div class="indv-project-bubbles-container">
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">engineering</span> Gameplay programmer
        </div>
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">code</span> C#
        </div>
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">build</span> Unity
        </div>
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">group</span> 2 members
        </div>
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">schedule</span> 6 months
        </div>
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">calendar_month</span> 2022 / 2023
        </div>
      </div>
    </div>

    <CarrouselComp :cards="this.images" class="carousel-comp"/>

    <p class="project-text">
      Sheep have taken over politics. They are on their way to becoming the biggest political party in the world. You as
      a human were sent in to spy on one of their meetings. You are disguised as a sheep in a suit. Make sure they don’t
      suspect you and get as much information as you can!
    </p>

    <div class="links">
      <div class="findcode-github">
        <h1>Find this project on</h1>
        <a href="https://github.com/Reemhi2122/InSheepsClothingShowcase" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
      </div>

      <div class="rewards">
        <h1>Awards</h1>
        <a href="https://indigoshowcase.nl/discover/" target="_blank"><img class="reward-img" src="/src/assets/Image/Logos/INDIGO_Selection_black.png"></a>
      </div>
    </div>

    <section class="software-skills">
      <h2 class="section-header">Software skills improved this project</h2>
      <div class="software-skills-icons">
        <div class="software-skill-element">
          <img class="software-skill-image"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" title="Unity" />
          <p class="software-skill-title"> Engine </p>
          <p class="software-skill-text"> Unity </p>
        </div>
        <div class="software-skill-element">
          <img class="software-skill-image"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" title="C#" />
          <p class="software-skill-title"> Language </p>
          <p class="software-skill-text"> C# </p>
        </div>
        <div class="software-skill-element">
          <img class="software-skill-image"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" title="C#" />
          <p class="software-skill-title"> Source control </p>
          <p class="software-skill-text"> Git </p>
        </div>
        <div class="software-skill-element">
          <img class="software-skill-image" src="../../assets/Image/Logos/OculusLogo.svg" title="Oculus" />
          <p class="software-skill-title"> VR System </p>
          <p class="software-skill-text"> Oculus </p>
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

        <CodeSnippetComponent hascode="true" link="https://github.com/Reemhi2122/InSheepsClothingShowcase/blob/main/ISCScripts/Systems/VotingSystem.cs">
          <template v-slot:Title>
            Voting System
          </template>

          <template v-slot:Image>
            <ExpandableImage class="contribution-image" :src="this.contributionImages[0]"/>
          </template>

          <template v-slot:Text>
            The main mechanic in the game is voting, this is where you
            as a player are in the spotlight and have to vote the same as the other sheep. This was
            done using events, and when a sheep notices you are not voting the correct answer,
            its suspiciousness will go up.
          </template>

          <template v-slot:Code>
            <code0/>
          </template>
        </CodeSnippetComponent>

        <div class="contribution-black-column"></div>

        <CodeSnippetComponent hascode="true" link="https://github.com/Reemhi2122/InSheepsClothingShowcase/blob/main/ISCScripts/Sheep/SheepSystem.cs">
          <template v-slot:Title>
            Sheep spawning
          </template>

          <template v-slot:Image>
            <ExpandableImage class="contribution-image" :src="this.contributionImages[1]"/>
          </template>

          <template v-slot:Text>
            We didn't want all sheep to be there all the time, so we decided to
            start with a fixed amount of sheep at the beginning of the game and
            added more when the player managed to get further into the game. This
            would ensure an easy start for the player and gradually make it harder.
          </template>

          <template v-slot:Code>
            <code1/>
          </template>
        </CodeSnippetComponent>

        <div class="contribution-black-row"></div>

        <CodeSnippetComponent hascode="true" link="https://github.com/Reemhi2122/InSheepsClothingShowcase/blob/main/ISCScripts/Interactables/Ipad.cs">
          <template v-slot:Title>
            Suspiciousness
          </template>

          <template v-slot:Image>
            <ExpandableImage class="contribution-image" :src="this.contributionImages[2]"/>
          </template>

          <template v-slot:Text>
            All the sheep have an individual suspiciousness bar, which if full is hard to remove.
            All these bars together act as a totally suspicious bar and when this one is full,
            the game is over. The sheep will increase in suspicion when they look at the player
            while they are doing something suspicious. The suspiciousness is displayed on a dynamic
            iPad. This will tell the player all this information without having to add an actual HUD.
          </template>

          <template v-slot:Code>
            <code2/>
          </template>
        </CodeSnippetComponent>

        <div class="contribution-black-column"></div>

        <CodeSnippetComponent hascode="true" link="https://github.com/Reemhi2122/InSheepsClothingShowcase/blob/main/ISCScripts/Sheep/PeekSheep.cs">
          <template v-slot:Title>
            Fax machine | Decryption machine
          </template>

          <template v-slot:Image>
            <ExpandableImage class="contribution-image" :src="this.contributionImages[3]"/>
          </template>

          <template v-slot:Text>
            Because the game was not challenging enough, we decided to add a new feature. This feature 
            needed to be different than all the others because we wanted more than only one-click actions. 
            So we came up with the fax/decryptor system. Where the sheep's signs would be encrypted, and 
            for the player to read them he needed to decrypt the system using a fax machine sent by him on 
            request. This fax machine would give a number of symbols in sequence depending on the number of 
            pictures sent by the player.
          </template>

          <template v-slot:Code>
            <code3/>
          </template>
        </CodeSnippetComponent>

        <div class="contribution-black-row"></div>

        <CodeSnippetComponent>
          <template v-slot:Title>
            Additional features include but are not limited to
          </template>

          <template v-slot:Text>
            <ul>
            <li>Designing key game elements</li>
            <li>Returning of objects after falling on the ground</li>
            <li>Sheep looking behavior</li>
            <li>Picture counting</li>
            <li>Scoreboard counting</li>
            <li>Scoreboard saving</li>
            <li>A peeking sheep, which comes by occasionaly</li>
            <li>Working on the game states</li>
            <li>Balancing of events and suspicion</li>
          </ul>
          </template>
        </CodeSnippetComponent>

        <div class="contribution-black-column hide-on-small"></div>

      </div>
    </section>

    <section class="team-section">
      <h2 class="section-header">The team</h2>
      <div class="basic-info">
        <p>Team size: 2 developers</p>
        <p>Programmers: 2</p>
      </div>

      <div class="team-container">
        <div class="team-container-box">
          <div class="team-element">
            <div class="team-name">
              <p>Kylian Dekker | Programmer</p>
              <a href="https://www.linkedin.com/in/kylian-dekker-26957015b/" target="_blank"><img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
            </div>
            <p class="team-portfolio"><a href="https://www.kyliandekker.com" target="_blank">www.kyliandekker.com</a></p>
          </div>

          <div class="team-element">
            <div class="team-name">
              <p>Stan Vogels | Programmer</p>
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
          <h3>Making a VR game</h3>
          <p>
            This was my first time stepping into the exciting world of virtual reality.
            I was eager to learn and explore this new technology, but I quickly realized
            that it was not going to be an easy journey. Despite the steep learning curve,
            I was determined to get a grip on it. Luckily I had Kylian as a teammate with
            prior experience in VR. This project taught me how to make a game interesting
            and playable for a VR game.
          </p>
        </div>
        
        <div class="contribution-black-column"></div>

        <div class="learned-element">
          <h3>Quick concepting</h3>
          <p>Because this game was originally made as a game jam, we had to create concepts fast and didn't have time
            to go in depth for each feature. Even though we created the game into a full game, most of the mechanics are
            still the same
            as we created in those three days. This process really taught me how to make mechanics in a short amount of
            time, make decisions
            on the spot, "kill my darlings" and teamworking.</p>
        </div>

        <div class="contribution-black-row"></div>

        <div class="learned-element">
          <h3>Keeping up Unity / C# skills</h3>
          <p>This project was made while I am still studying at Breda University of Applied Sciences (BUas), because on
            BUas we mostly
            code in C++ and Unreal Engine. This project was a good self-study project
            because it was refreshing and maintaining my Unity and C# skills. This will
            help me when I later in my career need to use these skills again.</p>
        </div>
        
        <div class="contribution-black-column"></div>

        <div class="learned-element">
          <h3>Small team (2 members)</h3>
          <p>Working in teams is important to improve teamwork skills, but there are different
            kinds of teams. This team, with limited amount of people taught me being responsible
            for a lot of the work, being both a designer and a programmer, having confrontations we
            can't solve ourselves and not having a distinctive lead. All of these experiences improved
            my teamwork in small teams, but I can also use these in bigger teams.</p>
        </div>
      </div>
    </section>

    <div class="findcode-github">
      <h1>Find this project on</h1>
      <a href="https://github.com/Reemhi2122/InSheepsClothingShowcase" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
    </div>
    <section class="empty-footer"></section>
</div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-csharp';

import Image0 from '/src/assets/Image/Portfolio/ISC/img0.webp'
import Image1 from '/src/assets/Image/Portfolio/ISC/img1.webp'
import Image2 from '/src/assets/Image/Portfolio/ISC/img2.webp'
import Image3 from '/src/assets/Image/Portfolio/ISC/img3.webp'
import Image4 from '/src/assets/Image/Portfolio/ISC/img4.webp'
import Image5 from '/src/assets/Image/Portfolio/ISC/img5.webp'
import Image6 from '/src/assets/Image/Portfolio/ISC/img6.webp'

import con0 from "/src/assets/Image/Portfolio/ISC/Header.webp";
import con1 from "/src/assets/Image/Portfolio/ISC/img5.webp";
import con2 from "/src/assets/Image/Portfolio/ISC/img2.webp";
import con3 from "/src/assets/Image/Portfolio/ISC/contributions/faxmachine.webp";

import code0 from "../CodeSnippets/ISC/Code0.vue"
import code1 from "../CodeSnippets/ISC/Code1.vue"
import code2 from "../CodeSnippets/ISC/Code2.vue"
import code3 from "../CodeSnippets/ISC/Code3.vue"

import CodeSnippetComponent from '../IndividualComponents/CodeSnippetComponent.vue'
import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue';
import ExpandableImage from '../IndividualComponents/ExpandableImage.vue'

export default {
  data() {
    return {
      name: 'ISC',
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
          }
        ],
      contributionImages: [
            con0,
            con1,
            con2,
            con3
        ],
      codefiles: [
        code0
      ]
    }
  },
  beforeMount() {
    this.$emit('OpenNavBar');
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = 'Stan Vogels | In sheeps clothing';
      }
    },
  },
  components:{
    CarrouselComp,
    ExpandableImage,
    CodeSnippetComponent,
    code0,
    code1,
    code2,
    code3
  }
}
</script>

<style>
.project-container {
  top: 0;
  background-color: white;
  width: 75%;
  position: absolute;
  margin-top: 100px;
  margin-left: 12.5%;
  height: 90vh;
  overflow-y: scroll;
}

.project-container::-webkit-scrollbar {
  display: none;
}

.header-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/src/assets/Image/Portfolio/ISC/Img1.webp");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 16vw;
  min-height: 100px;

  -webkit-clip-path: polygon(0 0, 100% 0, 100% 79%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 79%, 0% 100%);
  text-align: center;

  display: table;
}

.header-text {
  display: table-cell;
  vertical-align: middle;
}

.header-title {
  width: 100%;
  margin-left: calc(50% - 50%);
  color: white;
  font-weight: 600;
  font-style: normal;
  font-size: 3.5vw;
  line-height: 3vw;
}

.header-subtitle {
  font-weight: 400;
  font-style: normal;
  color: white;
  position: relative;
  font-size: 1.4vw;
}

.project-video {
  width: 70%;
  height: 25vw;
  margin-left: 15%;
  border-radius: 20px;
  margin-top: -4vw;
  object-fit: cover;
  background: black;
}

.indv-project-bubbles-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-left: 15%;
  width: 70%;
}

.indv-project-bubbles {
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 10px;
  color: black;
  margin-right: 5px;
  margin-top: 5px;

  display: flex;
  justify-content: center;
  align-content: center;
}

.material-symbols-outlined {
  margin-right: 5px;
}

.carousel-comp{
  margin-top: 50px;
  width: 80%;
  margin-left: 10%;
}

.project-text {
  margin-top: 25px;
  font-weight: 400;
  font-style: normal;
  width: 70%;
  margin-left: 15%;
  font-size: 1.4vw;
  line-height: normal;
  text-align: center;
}

.section-header {
  font-weight: 600;
  font-size: 30px;
}

.software-skills {
  margin-top: 100px;
  margin-left: var(--project-offset-left);
  width: 80%;
}

.software-skill-element {
  width: 150px;
  display:inline-block;
  height: auto;
  border: 2px dotted rgb(0, 0, 0);
  border-radius: 15px;
  margin-right: 15px;
  margin-top: 15px;
}

.software-skill-image{
  width: 50%;
  display:block;
  margin:auto;
  margin-top: 10px;
}

.software-skill-title{
  text-align: center;
  width: 80%;
  margin-left: 10%;
  margin-top: 10px;
  font-weight: 800;
}

.software-skill-text{
  text-align: center;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 20px;
}

.contribution-section {
  margin-top: 100px;
  width: 80%;
  margin-left: var(--project-offset-left);
}

.contribution-image {
  width: 100%;
  overflow: hidden;
}

.contribution-element-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 46.5% 1% 46.5%;
  grid-template-rows: repeat(2, auto);

  /* grid-gap: 40px 2%; */

  grid-gap: 50px 3%;
}

.contribution-black-column{
  width: 2px;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 100px;

  margin: auto;
  grid-column: span 1;
}

.contribution-black-row{
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 100px;

  grid-column: span 3;
}

.team-section {
  margin-top: 100px;
  margin-left: var(--project-offset-left);
}

.team-container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
}

.team-element {
  margin-top: 10px;
  height: 40px;
}

.team-name {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.team-name>p {
  font-weight: 600;
}

.team-name>a {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}

.team-portfolio {
  margin-top: -5px;
  font-size: 12px;
}

.learned-section {
  margin-top: 100px;
  width: 80%;
  margin-left: var(--project-offset-left);
}

.learned-element>h3 {
  font-size: 25px;
  font-weight: 500;
}

.learned-element>p {
  font-size: 20px;
  font-style: italic;
}

.learned-container {
  display: grid;
  grid-template-columns: 46.5% 1% 46.5%;
  grid-template-rows: repeat(2, auto);
  grid-gap: 50px 3%;
}

.links{
  margin-left: 15%;
  width: 70%;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, auto);
}

.findcode-github {
  font-style: normal;
  margin-top: 50px;
  text-align: center;
  font-size: 10px;
}

.findcode-github>h1 {
  font-weight: 800;
  margin-bottom: 0;
  font-size: 25px;
}

.findcode-github>a>img {
  margin-top: 0;
  width: 300px;
}

.rewards{
  font-style: normal;
  margin-top: 50px;
  text-align: center;

  display: inline-block;
}

.rewards>h1 {
  font-weight: 800;
  margin-bottom: 0;
  font-size: 25px;
}

.reward-img{
  margin-top: 10px;
  width: 130px;
}

.itchio{
  margin-top: 50px;
  width: 40%;
  margin-left: 27.5%;
}

.empty-footer {
  margin-top: 50px;
  height: 100px;
  width: 100%;
  background-color: #1A1A1A;
}

.empty-space {
  height: 100px;
}

@media (max-width: 1200px) {
  .software-skill-element {
    width: 150px;
    margin-right: 15px;
  }
}

@media (max-width: 1000px) {
  .contribution-element-container {
    margin-top: 2vw;
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, auto);
    grid-gap: 25px 5%;
  }

  .contribution-black-column{
    width: 100%;
    height: 2px;

    margin: auto;
    grid-column: span 1;
  }

  .contribution-black-row{
    width: 100%;
    height: 2px;

    grid-column: span 1;
  }

  .hide-on-small{
    display: none;
  }

  .project-text {
    font-size: calc(15px + 0.8vw);
  }

  .section-header {
    font-size: calc(20px + 1vw);
    font-weight: 800;
  }

  .software-skills{
    margin-top: calc(20px + 8vw);
  }

  .contribution-section {
    margin-top: calc(20px + 8vw);
  }

  .team-section {
    margin-top: calc(20px + 8vw);
  }

  .team-container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
  }

  .learned-section{
    margin-top: calc(20px + 8vw);
  }

  .learned-container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-gap: 20px;
  }

  .learned-element>h3 {
    font-size: 21px;
    font-weight: 500;
  }

  .learned-element>p {
    font-size: 16px;
    font-style: italic;
  }

  .findcode-github>a>img {
    width: 200px;
  }

  .project-container {
    margin-top: 100px;
    width: 90%;
    margin-left: 5%;
  }

  .project-video {
    height: 40vw;
    max-height: 450px;
    margin-left: 15%;
    border-radius: 20px;
    margin-top: -4vw;
    object-fit: cover;
  }

  .links{
    grid-template-columns: repeat(1, 1fr) !important;
    grid-template-rows: repeat(2, auto);
  }

  .itchio{
    width: 80%;
    margin-left: 10%;
  }
}

@media (max-width: 600px) {
  .carousel-comp{
    margin-top: 50px;
    width: 100%;
    margin-left: 0%;
  }

  .software-skill-element {
    width: 45%;
    margin-right: 2.5%;
  }
}
</style>

<style scoped>
.links{
  grid-template-columns: repeat(2, 1fr);
}
</style>