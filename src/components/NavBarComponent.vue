<template>
    <div :class="[TaskBarOpen ? 'BarOpen' : '']">
        <ul>
            <li><RouterLink to="/">HOME</RouterLink></li>
            <li><RouterLink to="/projects">PROJECTS</RouterLink></li>
            <li><RouterLink to="/skills">SKILLS</RouterLink></li>
            <li><RouterLink to="/contact">CONTACT</RouterLink></li>
        </ul>
    </div>
</template>

<script>
export default{
    data() {
        return {
            name: 'NavBar',
            TaskBarOpen: false,
            BlackBarRotation: -30 + 'deg',
            BlackBarSize: 500 + 'px',
            BarTransition: 0.5 + 's',
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
        this.myEventHandler();
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    methods: {
        myEventHandler() {
            var bodycontainer = document.getElementsByTagName("BODY")[0];
            var blackbarAngle =  90 - (Math.atan((bodycontainer.offsetWidth / bodycontainer.offsetHeight)) * 180 / Math.PI);
            var blackbarLenth = (Math.sqrt(Math.pow(bodycontainer.offsetWidth, 2) + Math.pow(bodycontainer.offsetHeight, 2))) / 5* 2.7;

            this.BlackBarSize = blackbarLenth + 'px';
            this.BlackBarRotation = -blackbarAngle + 'deg';
        },
        OpenNavBar(){
            // this.BarTransition = 0.5 + 's';
            this.TaskBarOpen = true;
        },
        CloseNavBar(){
            this.TaskBarOpen = false;
            // this.BarTransition = 0.0 + 's';
        },
    }
}
</script>

<style scoped>
div{
    width: v-bind(BlackBarSize);
    height: 10vh;
    background-color: #1A1A1A;
    -webkit-transform: rotate(v-bind(BlackBarRotation));
    -ms-transform: rotate(v-bind(BlackBarRotation));
    transform: rotate(v-bind(BlackBarRotation));
    vertical-align: center;
	margin-top: calc(13vh);
    margin-left: -150px;
    position: absolute;
    transition: v-bind(BarTransition);
}

.BarOpen{
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    margin-left: 0px;
    margin-top: 0px;
    width: 100%;
    height: 100vh;
}

ul{
    position: absolute;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: calc(5vh - 15px);
    margin-left: calc(5vw + 75px);
    margin-right: 100px;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
}

li{
    display: inline-block;
    margin-right: 70px;
    cursor: pointer;
}

li a{
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 20px;
    text-decoration: none;
    color: white;
}
</style>