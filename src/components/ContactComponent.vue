<template>
    <div class="contact-tab">
        <div class="scroll-container">
            <h1 class="tab-title">About</h1>
            <div class="tab-whiteline"></div>

            <div class="about-grid">
                <div class="about-container">
                    <img class="about-picture" src="/src/assets/Image/Stan/stan.jpg">
                    <p class="contact-text"><b>E-mail:</b><br>stanvogels@live.nl</p>
                    <div>
                        <a href="https://www.linkedin.com/in/stanvogels/"><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
                        <a href="https://github.com/Reemhi2122"><img class="white-image"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>
                    </div>
                    <a :href="this.cv" target="_blank" class="resume-button">Resume</a>
                </div>

                <div class="about-container">
                    <div class="about-section">
                        <p class="about-text">
                            <b>I am a passionate programmer driven by a love for gaming.</b>
                            <br><br>
                            
                            Hi, I'm Stan Vogels, a game programming student at 
                            Breda University of Applied Sciences
                            (<a style="color: white; font-weight: 200;" href="https://www.buas.nl/en/programmes/creative-media-and-game-technologies" target="_blank">BUas</a>)
                            in the Netherlands. Fueled by my curiosity and love for gaming, 
                            I discovered my passion for programming. I've
                            sharpened my skills in both game and web development,
                            always eager to bring new ideas and experiences to life through code.
                            I'm driven to turn my love for gaming into a career in programming and I can't wait to see
                            where this journey will take me.
                            <br><br>
                            I am currently wroking at Climax Studios as C++ programmer.
                        </p>
                    </div>


                    <!-- <div class="about-section">
                        <h1 class="about-info-title">Education</h1>
                        <div class="tab-whiteline"></div>
                        <div class="about-info-container">
                            <img class="about-info-image" src="/src/assets/Image/logos/BUAS.png" style="margin-right: 20px">
                            <img class="about-info-image" src="/src/assets/Image/logos/sintlucas.png" style="margin-right: 20px">
                            <p class="about-info-text">
                                As a programmer, I have a passion for creativity and innovation. 
                                Roadtrips offer a perfect escape from the screen and an opportunity to embrace adventure and discovery. 
                                The open road gives me the chance to explore new places and cultures while being surrounded by new 
                                sights and sounds. I find inspiration from my roadtrips, which I bring back to my work as a programmer. 
                                Navigating new territories, discovering hidden gems, and making spontaneous stops is what makes 
                                roadtripping so exciting for me. It's my way of taking a break from the familiar, staying connected to 
                                my creative roots, and making unforgettable memories.
                            </p>
                        </div>
                    </div> -->

                    <!-- <div class="about-section">
                        <h1 class="about-info-title">Roadtripping</h1>
                        <div class="tab-whiteline"></div>
                        <div class="about-info-container">
                            <img class="about-info-image" src="/src/assets/Image/about/roadtrip.jpg" style="margin-right: 20px">
                            <p class="about-info-text">
                                As a programmer, I have a passion for creativity and innovation. 
                                Roadtrips offer a perfect escape from the screen and an opportunity to embrace adventure and discovery. 
                                The open road gives me the chance to explore new places and cultures while being surrounded by new 
                                sights and sounds. I find inspiration from my roadtrips, which I bring back to my work as a programmer. 
                                Navigating new territories, discovering hidden gems, and making spontaneous stops is what makes 
                                roadtripping so exciting for me. It's my way of taking a break from the familiar, staying connected to 
                                my creative roots, and making unforgettable memories.
                            </p>
                        </div>
                    </div>

                    <div class="about-section">
                        <h1 class="about-info-title">Interests</h1>
                        <div class="tab-whiteline"></div>
                        <div class="about-info-container">
                            <p class="about-info-text">
                                Being a programmer, I love the tech-packed action of Formula 1. 
                                The races showcase the best of engineering and aerodynamics as teams 
                                race to push the limits. Watching these high-speed machines is a total rush, 
                                seeing teams use data and innovation to score the win. The adrenaline-fueled 
                                competition, combined with the technical skills needed, makes Formula 1 a 
                                must-watch for me. It's the perfect mix of tech, teamwork, and edge-of-your-seat excitement.
                            </p>
                            <img class="about-info-image" src="/src/assets/Image/about/formula1.jpg" style="margin-left: 20px">
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '/src/assets/Documents/2025_CV_Portfolio.pdf'

export default {
    data() {
        return {
            name: 'Contact',
            cv: data
        }
    },
    methods: {
    },
    beforeMount() {
        this.$emit('OpenNavBar');
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = 'Stan Vogels | Contact';
            }
        },
    }
}
</script>

<style scoped>
.contact-tab {
    top: 0;
    width: 70%;
    margin-left: 15%;
    position: absolute;
    margin-top: 100px;
}

.scroll-container {
    overflow-y: scroll;
    height: 90vh;
    color: white;
    display: inline-block;
    width: 100%;
}

.scroll-container::-webkit-scrollbar {
    display: none;
}

.tab-title {
    font-weight: 200;
    font-style: normal;
    font-size: 45px;
    color: white;
}

.tab-whiteline {
    height: 2px;
    background-color: white;
}

.about-grid {
    display: grid;
    grid-template-columns: 18% 1fr;
    grid-template-rows: 1fr;
}

.about-container {
    margin-top: 20px;
}

.about-section {
    margin-bottom: 50px;
    margin-left: 30px;
}

.about-text {
    width: 95%;
    font-size: 24px;
    font-weight: 200;
    line-height: 35px;
}

.resume-button {
    margin-top: 10px;
    border: 3px solid white;
    color: white;
    padding: 7px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
    width: 100%;
}

.about-info-title {
    font-weight: 100;
}

.about-info-container {
    margin-top: 20px;
    display: flex;
}

.about-info-text {
    font-size: 18px;
    font-weight: 100;
}

.about-info-image {
    width: 200px;
    display: inline;
}

.about-picture {
    width: 100%;
}

.contact-text {
    margin-top: 20px;
    color: white;
    font-size: calc(7px + 1vw);
    font-weight: 200;
    line-height: 35px;
}

a>img {
    margin-top: 10px;
    width: 50px;
    margin-right: 20px;
}

.white-image {
    filter: brightness(0) invert(1);
}

@media (max-width: 1000px) {
    .about-grid {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, auto);
    }

    .about-container {
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
    }

    .about-picture {
        max-width: 300px;
    }

    .contact-text {
        font-size: 30px;
    }

    .about-text {
        width: 100%;
    }

    .about-section {
        margin-left: 0;
    }

    .contact-tab {
        width: 90%;
        margin-left: 5%;
        margin-top: 50px;
    }
}
</style>