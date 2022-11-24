<template>
    <div class="project-container">
        <div class="header-background">
            <div class="div-darken"></div>
            <h1 class="header-title">IN SHEEP'S CLOTHING<br><h2 class="header-subtitle">2018 - FEATURED PROJECT - C#</h2></h1>
        </div>
        <video class="project-video" poster="../../assets/Image/Portfolio/ISC/Main.jpg" controls>
            <source src="Video/InSheepsClothing.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <p class="project-text">
            Sheep have taken over politics. They are on their way to becoming the biggest political party in the world. You as a human were sent in to spy on one of their meetings. You are disguised in a sheep suit. Make sure they don’t suspect you and get as much information as you can!
        </p>

        <div id="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/InSheepsClothing"><img src="../../assets/Image/Portfolio/GithubIcon.png"></a>
        </div>

        <div id="info-container">
            <div class="info-item unity"></div>
            <div class="info-item Text"><h1>C#</h1></div>
            <div class="info-item Text"><h1>VR</h1></div>
        </div>

        <div id="focus-container">
            <h1 id="focus-title">What have I learned?</h1>
            <p class="focus-text">The main thing I learned on this project was VR and teamwork. It was made in a game jam with only 3 days so working together was essential. As you can see we did an incredible job on getting an awesome and complete game in this time span. We didn't add or edit anything after the game jam because than we couldn't say it was made in 3 days.
            <br><br><b>Teamwork</b><br>
            We only had 3 days, so teamwork was the key to success. As one of the team leaders, I made sure there was a planning that everyone followed. 
            <br><br><b>Lighting</b><br>
            One of the first projects I worked on lightning. With a lot of trial and error, I got the lightning to look good.
            <br><br><b>Virtual Reality</b><br>The virtual reality was made with Oculus in Unity and later transformed to Steam VR to record the game. I learned a lot setting this up with my friend.
            </p>
        </div>

        <div class="project-team">
            <h1 class="project-team-title">TEAM</h1>
            <div class="project-team-img-container">
                <a href="https://www.twinkys.eu"><div class="project-team-img"><h1 class="project-team-name">Kylian</h1></div></a>
                <a href="https://www.behance.net/willemvandenakker?tracking_source=search%7Cwillem%20van%20den%20akker"><div class="project-team-img"><h1 class="project-team-name">Willem</h1></div></a>
                <a href="https://www.behance.net/ndevisser81a1"><div class="project-team-img"><h1 class="project-team-name">Niels</h1></div></a>
                <a href="https://www.behance.net/danishaivana"><div class="project-team-img"><h1 class="project-team-name">Danisha</h1></div></a>
                <a href="https://www.behance.net/avanerp4836"><div class="project-team-img"><h1 class="project-team-name">Aaron</h1></div></a>
                <a href="https://www.behance.net/rmeegdes68c5"><div class="project-team-img"><h1 class="project-team-name">Rene</h1></div></a>
            </div>
        </div>

        <div class="footer">
            <div class="footer-img"></div>
        </div>
	</div>
</template>

<script>
export default{
    data() {
        return {
            name: 'ISC',
        }
    },
    methods: {
    },
    beforeMount(){
       this.$emit('OpenNavBar');
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = 'Stan Vogels | In sheeps clothing';
            }
        },
    }
}
</script>

<style>
.project-container {
  background-color: white;
  width: 80%;
  position: absolute;
  margin-top: 100px;
  margin-left: 10%; 
  height: 90vh;
  overflow-y: scroll;
}

.header-background {
  background-image: url("../../assets/Image/Portfolio/ISC/Header.png");
  background-position: center;
  background-size: cover;
  background-color: black;
  width: 100%;
  height: 30vw;
  min-height: 300px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 79%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 79%, 0% 100%);
  text-align: center; 
}

  .header-background.COTF {
    background-image: url("../../assets/Image/Portfolio/COTF/Header.png"); }
  .header-background.CG {
    background-image: url("../pimg/CG/Screenshot6.png"); }
  .header-background.EB {
    background-image: url("../pimg/EB/Shot.jpg");
    background-size: 100%; }
  .header-background.AN {
    background-image: url("../pimg/AN/ANHome.png");
    background-size: 100%; }
  .header-background.PB {
    background-image: url("../pimg/PB/PBHome.png"); }
  .header-background.SI {
    background-image: url("../pimg/BP/BUASLogo.png"); }

.header-title {
  margin-top: calc(-180px - 10vw);
  width: 100%;
  margin-left: calc(50% - 50%);
  color: white;
  font-family: montserrat, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 4vw;
  position: relative;
  line-height: 50px; }

.header-subtitle {
  font-family: montserrat, sans-serif;
  font-weight: 800;
  font-style: normal;
  color: white;
  position: relative;
  font-size: 1.5vw; }

.project-video {
  width: 70%;
  margin-left: 15%;
  margin-top: -200px;
  background-color: #1A1A1A;
  position: relative;
  z-index: 2; }

.project-text {
  font-family: montserrat, sans-serif;
  font-weight: 800;
  font-style: normal;
  width: 70%;
  margin-left: 15%;
  font-size: 1.5vw;
  line-height: normal;
}

#findcode-github {
  width: 70%;
  margin-left: 15%;
  font-family: montserrat, sans-serif;
  font-style: normal;
  margin-top: 100px;
  text-align: center;
  font-size: 10px; }
  #findcode-github > h1 {
    font-weight: 800;
    margin-bottom: 0; }
  #findcode-github > a > img {
    margin-top: 0;
    width: 300px; }

#info-container {
    height: 200px;
    width: 60%;
    margin-left: 20%;
    margin-bottom: 100px;
    margin-top: 100px;
    display: -ms-grid;
    display: grid;
    grid-template-rows: repeat(1, 11vw);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5vw; 
}

.info-item {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 5px solid black;
    margin: 0 auto; 
}

.info-item.unity {
    background-image: url(../../assets/Image/Portfolio/Unity.png);
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat; 
}

.info-item.Text {
    font-family: montserrat, sans-serif;
    font-style: normal;
    font-size: 2.2vw;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; 
}

.info-item.Text > h1 {
    font-weight: 600;
    margin: 0 auto; 
}

#focus-container {
    font-family: montserrat, sans-serif;
    font-style: normal;
    width: 70%;
    margin-left: 15%; 
}

#focus-title {
    font-weight: 700;
    font-size: 40px;
    font-size: 2.1vw; 
} 

.focus-text {
  font-size: 25px;
  font-size: 1.3vw; 
}

.focus-text > b{
    font-size: 1.6vw;
}

.project-team {
  width: 80%;
  margin-left: 10%; 
}

.project-team-title {
  font-family: montserrat, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 4vw;
  margin-top: 75px;
  margin-left: 10%; 
}

.project-team-img-container {
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
  display: -ms-grid;
  display: grid;
  grid-template-rows: repeat(2, 250px);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px; 
}

.project-team-img-container > a {
    text-decoration: none; 
}

.project-team-img {
  background-image: url("../../assets/Image/Portfolio/ISC/Header.png");
  background-position: left;
  background-size: 300%;
  height: 100%;
  width: 100%;
  margin-top: -40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; 
}

.project-team-name {
  font-family: montserrat, sans-serif;
  font-weight: 800;
  font-style: normal;
  color: white;
  font-size: 3vw;
  text-align: center;
  margin-left: calc(50% - 45%);
  width: 90%; 
}

#portfolio-screenshot-container {
  width: 70%;
  margin-left: 15%;
  margin-top: 100px; 
}

.portfolio-screenshot {
  width: 47%;
  margin-right: 1%;
  margin-left: 1%;
  margin-bottom: 1%;
  margin-top: 1%; 
}

.footer {
  width: 100%;
  height: 25vw;
  min-height: 200px;
  background-image: url(../../assets/Image/Portfolio/ISC/Main.jpg);
  background-size: cover;
  background-position: center; 
}

.footer-img {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/Image/Portfolio/ISC/Logo.png);
  background-position: center;
  background-size: 22vw;
  background-repeat: no-repeat; 
}

.div-darken {
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.2; 
}

.empty-space {
  height: 100px; 
}
</style>