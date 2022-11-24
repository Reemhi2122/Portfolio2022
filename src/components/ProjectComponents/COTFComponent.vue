<template>
    <div class="project-container">
        <div class="header-background COTF">
            <div class="div-darken"></div>
            <h1 class="header-title">CRY OF THE FOX<br><h2 class="header-subtitle">2020 - UNREAL ENGINE - GROUP PROJECT</h2></h1>
        </div>
        <video class="project-video" poster="../../assets/Image/Portfolio/COTF/Main.jpg" controls>
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

        <!-- <div class="project-team">
            <h1 class="project-team-title">TEAM</h1>
            <div class="project-team-img-container">
                <a href="https://www.twinkys.eu"><div class="project-team-img"><h1 class="project-team-name">Kylian</h1></div></a>
                <a href="https://www.behance.net/willemvandenakker?tracking_source=search%7Cwillem%20van%20den%20akker"><div class="project-team-img"><h1 class="project-team-name">Willem</h1></div></a>
                <a href="https://www.behance.net/ndevisser81a1"><div class="project-team-img"><h1 class="project-team-name">Niels</h1></div></a>
                <a href="https://www.behance.net/danishaivana"><div class="project-team-img"><h1 class="project-team-name">Danisha</h1></div></a>
                <a href="https://www.behance.net/avanerp4836"><div class="project-team-img"><h1 class="project-team-name">Aaron</h1></div></a>
                <a href="https://www.behance.net/rmeegdes68c5"><div class="project-team-img"><h1 class="project-team-name">Rene</h1></div></a>
            </div>
        </div> -->

        <div class="empty-space" ></div>

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

<style scoped>

</style>