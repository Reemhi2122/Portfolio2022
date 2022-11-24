<template>
    <div id="contact-tab">
        <h1 class="tab-title">CONTACT</h1>
        <div class="tab-whiteline"></div>
        <p id="contact-text">E-mail:<br><font size="6">stanvogels@live.nl</font></p>
        <div id="contact-icon">
            <a href="https://www.linkedin.com/in/stanvogels/"><img class="contact-icon-icon" src="img/LinkedinIcon.svg"></a>
            <a href="https://github.com/Reemhi2122"><img class="contact-icon-icon" src="img/GithubIcon.png"></a>
            <a href="https://www.behance.net/svogelsf698"><img class="contact-icon-icon" src="img/BehanceIcon.png"></a>
            <a href="https://twitter.com/Stan_Vogels"><img class="contact-icon-icon" src="img/TwitterIcon.jpg"></a>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            name: 'Contact',
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
                document.title = 'Stan Vogels | Contact';
            }
        },
    }
}
</script>

<style scoped>

#contact-tab {
  height: 80vh;
  width: 100%;
  position: absolute;
  pointer-events: none;
}

.tab-title {
  position: absolute;
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 45px;
  color: white;
  margin-left: 15%;
  margin-top: calc(16vh - 60px);
  pointer-events: auto;
}

.tab-whiteline {
  width: 70%;
  height: 2px;
  background-color: white;
  position: absolute;
  margin-left: 15%;
  margin-top: 16vh;
}

#contact-text {
    margin-top: 100px;
    margin-left: 7.5%;
    width: 85%;
    color: white;
}

#contact-icon {
    margin-left: 7.5%;
    position: relative;
}
</style>