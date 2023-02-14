<template>
  <div class="project-container">
    <div class="front-page">
      <div class="header-background">
        <div class="header-text">
          <h1 class="header-title">IN SHEEP'S CLOTHING</h1>
          <h2 class="header-subtitle">GameJam turned into full game</h2>
        </div>
      </div>

      <video class="project-video" poster="../../assets/Image/Portfolio/ISC/Main.jpg" controls>
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
          <span class="material-symbols-outlined">schedule</span> 3 days
        </div>
        <div class="indv-project-bubbles">
          <span class="material-symbols-outlined">calendar_month</span> 2019
        </div>
      </div>

      <!-- <div v-if="!this.mobile" class="see-more-div">
        <h1>See more</h1>
        <img src="/src/assets/Image/Logos/SeeMoreImage.svg" />
      </div> -->
    </div>

    <p class="project-text">
      Sheep have taken over politics. They are on their way to becoming the biggest political party in the world. You as
      a human were sent in to spy on one of their meetings. You are disguised as a sheep in a suit. Make sure they don’t
      suspect you and get as much information as you can!
    </p>

    <section class="software-skills">
      <h2 class="section-header">Software skills improved this project</h2>
      <div class="software-skills-icons">
        <img class="software-skill-element"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" title="Unity" />
        <img class="software-skill-element"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" title="C#" />
        <img class="software-skill-element"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" title="Git" />
        <img class="software-skill-element" src="../../assets/Image/Logos/OculusLogo.svg" title="Oculus" />
      </div>
    </section>

    <section class="contribution-section">
      <h2 class="section-header">What I contributed to the project</h2>
      <div class="contribution-element-container">
        <div class="contribution-element">
          <p class="contribution-element-title">Voting System</p>
          <img class="contribution-image" src="/src/assets/Image/Portfolio/ISC/contributions/VotingSystem.jpg">
          <p class="contribution-text">The main mechanic in the game is the voting, this is where you as a player are in
            the spotlight
            and have to vote the same as the other sheep. This was done using events, and when a sheep notices you are
            not voting the correct answer, their suspicousness will go up.
          </p>
        </div>
        <div class="contribution-element">
          <p class="contribution-element-title">Sheep spawning</p>
          <img class="contribution-image" src="/src/assets/Image/Portfolio/ISC/contributions/SheepSpawning.jpg">
          <p class="contribution-text"> We didn't want all sheep to be there all the time, so we decided to start with a
            fixed amount of sheep
            in the beginning of the game, and added more when the player managed to get further into the game. This
            would ensure
            an easy start for the player and gradually make it harder.
          </p>
        </div>
        <div class="contribution-element">
          <p class="contribution-element-title">Suspicousness</p>
          <img class="contribution-image" src="/src/assets/Image/Portfolio/ISC/contributions/Suspicousness.jpg">
          <p class="contribution-text">All the sheep have an individual suspicousness bar, which if full is hard to
            remove. All these bars
            together act as a total suspicous bar and when this one is full, the game is over. The sheep will only get
            more
            suspicous when they look at the player while they are doing something suspicous. The suspicousness is
            displayed on
            a dynamic ipad. This will tell the player all this information without having to add an actual HUD.
          </p>
        </div>
        <div class="contribution-element">
          <p class="contribution-element-title">Peek sheep</p>
          <img class="contribution-image" src="/src/assets/Image/Portfolio/ISC/contributions/PeekSheep.jpg">
          <p class="contribution-text">I also created the peek sheep that you can see in the right corner, this sheep
            will peek at you at certain
            intervals and will make it harder for the player to do his work and report back to the FBI. This sheep will
            start looking
            at you more the longer the game goes on and had its own supsicous rating.
          </p>
        </div>
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
              <a href="https://www.linkedin.com/in/kylian-dekker-26957015b/"><img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
            </div>
            <p class="team-portfolio"><a href="www.kyliandekker.com">www.kyliandekker.com</a></p>
          </div>

          <div class="team-element">
            <div class="team-name">
              <p>Stan Vogels | Programmer</p>
              <a href="https://www.linkedin.com/in/stanvogels/"><img
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
          <p>This was my first time stepping into the exciting world of virtual reality.
            I was eager to learn and explore this new technology, but I quickly realized that it was not going to be an
            easy journey.
            Despite the steep learning curve, I was determined to get a grip on it. Luckily I had kylian as a team mate
            with prior experience
            in VR. This project teached me how to make a game interesting and playable for a VR game.
          </p>
        </div>
        <div class="learned-element">
          <h3>Quick concepting</h3>
          <p>Because this game was originally made as a game jam, we had to create concepts fast and didn't have time
            to go in depth for each feature. Even though we created the game into a full game, most of the mechanics are
            still the same
            as we created in those three days. This process really taught me how to make mechanics in a short amount of
            time, make decisions
            on the spot, "kill my darlings" and teamworking.</p>
        </div>
        <div class="learned-element">
          <h3>Keeping up Unity / C# skills</h3>
          <p>This project was made while I am still studying at Breda University of Applied Sciences (BUas), because on
            BUas we mostly
            code in C++ and Unreal Engine. This project was a good self-study project
            because it was refreshing and maintaining my Unity and C# skills. This will
            help me when I later in my career need to use these skills again.</p>
        </div>
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
      <a href="https://github.com/Reemhi2122/InSheepsClothing"><img src="/src/assets/Image/GithubIcon.png"></a>
    </div>
    <section class="empty-footer"></section>
  </div>
</template>

<script>
import VueEmbedGist from "vue-embed-gist";

export default {
  data() {
    return {
      name: 'ISC',
      mobile: false
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
        document.title = 'Stan Vogels | In sheeps clothing';
      }
    },
  },
  components: {
    VueEmbedGist,
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

/* .front-page {
  height: 90vh;
  min-height: 42.5vw;
} */

.header-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/src/assets/Image/Portfolio/ISC/Header.png");
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
  height: 22.5vw;
  /* max-height: 450px; */
  margin-left: 15%;
  border-radius: 20px;
  margin-top: -4vw;
  object-fit: cover;
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

/* .see-more-div {
  width: 40px;
  height: 40px;
  margin-left: calc(50% - 20px);
  margin-top: 50px;
}

.see-more-div>h1 {
  width: 200px;
  font-size: 20px;
  margin-left: -80px;
  text-align: center;
  font-weight: 600;
  margin-bottom: -5px;
} */

.project-text {
  margin-top: 50px;
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
  margin-top: 50px;
  margin-left: var(--project-offset-left);
  width: 80%;
}

.software-skills-icons {
  margin-top: 2vw;
  display: -ms-grid;
  display: grid;
  grid-template-rows: repeat(1, auto);
  grid-template-columns: repeat(4, auto);
}

.software-skill-element {
  width: 150px;
  margin: 0 auto;
}

.contribution-section {
  margin-top: 100px;
  width: 80%;
  margin-left: var(--project-offset-left);
}

.contribution-element-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-gap: 50px 5%;
}

.contribution-element-title {
  font-weight: 400;
  font-size: 25px;
  font-style: italic;
}

.contribution-image {
  width: 100%;
  overflow: hidden;
}

.contribution-text {
  font-size: 20px;
}

.team-section {
  margin-top: 50px;
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
  margin-top: 50px;
  width: 80%;
  margin-left: var(--project-offset-left);
}

.learned-element>h3 {
  font-size: 25px;
}

.learned-element>p {
  font-size: 20px;
  font-style: italic;
}

.learned-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-gap: 50px;
}


.findcode-github {
  width: 70%;
  margin-left: 15%;
  font-style: normal;
  margin-top: 50px;
  text-align: center;
  font-size: 10px;
}

.findcode-github>h1 {
  font-weight: 800;
  margin-bottom: 0;
}

.findcode-github>a>img {
  margin-top: 0;
  width: 300px;
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

@media (max-width: 1000px) {
  /* .front-page {
    height: auto;
  } */

  .contribution-element-container {
    margin-top: 2vw;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-gap: 25px 5%;
  }

  .project-text {
    font-size: calc(15px + 0.8vw);
  }

  .section-header {
    font-size: calc(12px + 1vw);
  }

  .software-skills {
    margin-top: 5vw;
  }

  .software-skill-element {
    width: 8vw;
  }

  .contribution-section {
    margin-top: 8vw;
  }

  .contribution-element {
    margin-bottom: 10px;
  }

  .team-section {
    margin-top: 20px;
  }

  .team-container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
  }

  .learned-container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-gap: 20px;
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
}
</style>