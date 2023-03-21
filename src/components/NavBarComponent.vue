<template>
    <div :class="[TaskBarOpen ? 'BarOpen' : '']" ref="NavBarCompRef">
        <ul :class="[TaskBarOpen ? 'BarOpen' : '']">
            <li><RouterLink active-class="router-active" to="/">HOME</RouterLink></li>
            <li><RouterLink active-class="router-active" to="/projects">PROJECTS</RouterLink></li>
            <li><RouterLink active-class="router-active" to="/skills">SKILLS</RouterLink></li>
            <li><RouterLink active-class="router-active" to="/about">ABOUT</RouterLink></li>
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

            BlackBarOffsetHeight: 0 + 'px',
            BlackBarOffsetWidth: 0 + 'px',

            BlackBarHalfHeight: 0 + 'px',
            BlackBarHalfWidth: 0 + 'px',

            blackBarLength: 0 + 'px',
            BarTransition: 0.0 + 's',
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
        this.myEventHandler();
    },
    mounted(){
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    methods: {
        myEventHandler() {
            this.BarTransition = 0.0 + 's';
            var bodycontainer = document.getElementsByTagName("BODY")[0];

            var widthProcentage = bodycontainer.clientWidth < 1000 ? 70 : 40;
            var heightProcentage =  bodycontainer.clientWidth < 1000 ? 40 : 50;

            var fullClientHeight = bodycontainer.clientHeight / 100 * heightProcentage;
            var fullClientwidth = bodycontainer.clientWidth / 100 * widthProcentage;

            this.BlackBarOffsetHeight = (bodycontainer.clientHeight / 100 * (heightProcentage / 2)) + 'px';
            this.BlackBarOffsetWidth = (bodycontainer.clientWidth / 100 * (widthProcentage / 2)) + 'px';
           
            var blackbarAngle =  90 - (Math.atan(fullClientwidth / fullClientHeight) * 180 / Math.PI);
            var blackBarLength = (Math.sqrt(Math.pow(fullClientwidth, 2) + Math.pow(fullClientHeight, 2)) + 200);

            this.BlackBarHalfHeight = bodycontainer.clientHeight / 100 * 5 + 'px';
            this.BlackBarHalfWidth = blackBarLength / 2 + 'px';

            this.BlackBarSize = blackBarLength + 'px';
            this.BlackBarRotation = -blackbarAngle + 'deg';
        },
        OpenNavBar(){
            this.BarTransition = 0.5 + 's',
            this.TaskBarOpen = true;
        },
        CloseNavBar(){
            this.BarTransition = 0.5 + 's',
            this.TaskBarOpen = false;
        },
    }
}
</script>

<style scoped>
div{
    position: absolute;
    top: 0;
    left: 0;

    height: 10vh;
    background-color: #1A1A1A;
    
    margin-top: calc(v-bind(BlackBarOffsetHeight) - v-bind(BlackBarHalfHeight));
    margin-left: calc(v-bind(BlackBarOffsetWidth) - v-bind(BlackBarHalfWidth));
    
    transition: v-bind(BarTransition);
    
    -webkit-transform: rotate(v-bind(BlackBarRotation));
    -ms-transform: rotate(v-bind(BlackBarRotation));
    transform: rotate(v-bind(BlackBarRotation));

    width: v-bind(BlackBarSize);
    vertical-align: center;
}

div.BarOpen{
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    margin-left: 0px;
    margin-top: 0px;
    width: 120%;
    height: 100vh;
}

ul{
    position: absolute;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: calc(5vh - 1vw);
    margin-left: calc(5vw + 100px);
    margin-right: 100px;
    white-space:nowrap;
}

ul.BarOpen{
    margin-top: 32px;
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
    font-size: 1.2vw;
    text-decoration: none;
    color: white;
}

li a:hover{
    color: gray;
}

.router-active{
    font-weight: 400;
}

@media (max-width: 1000px){
    ul{
        visibility: hidden;
    }

    div{
        margin-top: calc(v-bind(BlackBarOffsetHeight) - (v-bind(BlackBarHalfHeight) / 4));
        height: 2.5vh;
    }
}
</style>