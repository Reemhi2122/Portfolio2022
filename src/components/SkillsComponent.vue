<template>
    <div id="about-tab">
        <h1 class="tab-title">Skills</h1>
        <div class="tab-whiteline"></div>
        <div class="scroll-container">
            <h1>SOFTWARE SKILLS</h1>
            <ul class="SkillIcons">
                <li class="TextItem">C++</li>
                <li class="TextItem">C#</li>
                <li class="TextItem">HTML</li>
                <li class="TextItem">CSS</li>  
            </ul>
            <h1>Worked with:</h1>
            <ul class="SkillIcons">
                <li class="TextItem">C++</li>
                <li class="TextItem">C#</li>
                <li class="TextItem">Git</li>
                <li class="TextItem">CSS</li>  
            </ul>
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
    beforeCreate(){
        this.$emit('OpenNavBar');
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = 'Stan Vogels | Skills';
            }
        },
    }
}
</script>

<style scoped>

#about-tab {
    visibility: show;
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

.scroll-container {
    margin-top: calc(16vh + 30px);
    width: 70%;
    margin-left: 15%;
    overflow-y: scroll;
    height: 70vh;
    pointer-events: auto;
    color: white;
}

.scroll-container::-webkit-scrollbar {
    display: none;
}

.SkillIcons{
    margin-left: 0;
    
    margin-bottom: 20px;
}

.SkillIcons > li{
    margin-top: 10px;
    display: inline-block;
    border: solid;
    border-radius: 25px;
    width: 100px;
    height: 100px;
    margin-right: 20px;
    text-align: center;
}

.TextItem{
    font-size: 30px;
    font-weight: 700;
    margin: 0;
}

</style>