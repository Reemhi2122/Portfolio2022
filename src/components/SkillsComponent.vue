<template>
    <div class="about-tab">
        <h1 class="tab-title">Skills</h1>
        <div class="tab-whiteline"></div>
        <div class="scroll-container">
            <div class="skill-container">
                <h1>Languages</h1>
                <ul class="SkillIcons">
                    <li class="TextItem">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                        title="C++" />
                        <p class="skill-title">C++</p>
                        <p class="skill-level">advanced</p>
                    </li>
                    <li class="TextItem">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                        title="C#" />
                        <p class="skill-title">C#</p>
                        <p class="skill-level">intermediate</p>
                    </li>
                    <li class="TextItem">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                        title="C" />
                        <p class="skill-title">C</p>
                        <p class="skill-level">intermediate</p>
                    </li>
                </ul>
            </div>

            <div class="skill-container">
                <h1>Platforms</h1>
                <ul class="SkillIcons">
                    <li class="TextItem">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
                            title="Windows" />
                        <p class="skill-title">Windows</p>
                        <p class="skill-level">advanced</p>
                    </li>
                    <li class="TextItem">
                        <img src="../assets/Image/Logos/PlayStation.svg" title="PlayStation" />
                        <p class="skill-title">Playstation</p>
                        <p class="skill-level">intermediate</p>
                    </li>
                    <li class="TextItem">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
                            title="Raspberry Pi" />
                        <p class="skill-title">Raspberry Pi</p>
                        <p class="skill-level">Beginner</p>
                    </li>
                </ul>
            </div>

            <div class="skill-container">
                <h1>Render API's</h1>
                <ul class="SkillIcons">
                    <li class="TextItem">
                        <img src="../assets/Image/Logos/directx11.webp" title="DirectX11"/>
                        <p class="skill-title">DirectX11</p>
                        <p class="skill-level">intermediate</p>
                    </li>
                    <li class="TextItem">
                        <img src="../assets/Image/Logos/directx12.webp" title="DirectX12"/>
                        <p class="skill-title">DirectX12</p>
                        <p class="skill-level">beginner</p>
                    </li>
                </ul>
            </div>

            <div class="skill-container">
                <h1>Tools</h1>
                <ul class="SkillIcons">
                    <li class="TextItem">
                        <img class="white-image"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg"
                            title="Unreal Engine" />
                        <p class="skill-title">Unreal Engine</p>
                        <p class="skill-level">intermediate</p>
                        </li>
                    <li class="TextItem">
                        <img class="white-image"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                            title="Unity" />
                        <p class="skill-title">Unity</p>
                        <p class="skill-level">advanced</p>
                        </li>
                    <li class="TextItem">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
                        <p class="skill-title">Git</p>
                        <p class="skill-level">advanced</p>
                    </li>
                    <li class="TextItem">
                        <img src="/src/assets/Image/Logos/Perforce.png" title="Perforce" />
                        <p class="skill-title">Perforce</p>
                        <p class="skill-level">intermediate</p>
                    </li>
                    <li class="TextItem">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
                            title="Jira / Scrum" />
                        <p class="skill-title">Jira</p>
                        <p class="skill-level">intermediate</p>
                    </li>
                    <li class="TextItem">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
                            title="Visual Studio" />
                        <p class="skill-title">Visual Studio</p>
                        <p class="skill-level">advanced</p>
                    </li>
                    <li class="TextItem">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                            title="Visual Studio Code" />
                        <p class="skill-title">VS Code</p>
                        <p class="skill-level">advanced</p>
                    </li>
                    <li class="TextItem">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg"
                            title="Visual Studio Code" />
                        <p class="skill-title">CMake</p>
                        <p class="skill-level">Beginner</p>
                    </li>
                    <li class="TextItem">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                            title="Adobe Photoshop" />
                        <p class="skill-title">Adobe PS</p>
                        <p class="skill-level">Beginner</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Contact',
        }
    },
    methods: {
    },
    beforeCreate() {
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
.about-tab {
    top: 0;
    width: 70%;
    margin-left: 15%;
    position: absolute;
    margin-top: 100px;
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

.scroll-container {
    overflow-y: scroll;
    height: 70vh;
    color: white;
    display: inline-block;
    width: 100%;
}

.scroll-container::-webkit-scrollbar {
    display: none;
}

.skill-container {
    display: inline-block;
    margin-right: 5%;
    margin-bottom: 30px;
    margin-top: 20px;
}

.SkillIcons {
    margin: 0;
    padding: 0;
}

.SkillIcons>li {
    margin-top: 10px;
    display: inline-block;
    margin-right: 20px;
    text-align: center;
}

.TextItem>img {
    width: 13vw;
    max-width: 100px;
}

.skill-title{
    color: white;
    font-size: 16px;
    font-weight: 600;
}

.skill-level{
    margin-top: -4px;
    font-size: 12px;
    font-weight: 300;
}

.white-image {
    filter: brightness(0) invert(1);
}

@media (max-width: 1000px) {
    .about-tab {
        width: 90%;
        margin-left: 5%;
        margin-top: 25px;
    }

    .scroll-container {
        height: 85dvh;
    }

    .skill-title{
        font-size: 12px;
    }
}
</style>