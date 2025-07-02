<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Building Block Engine</h1>
                    <h2 class="header-subtitle">A custom engine created with DX11 [WIP]</h2>
                </div>
            </div>

            <!-- <video class="project-video" controls>
                <source src="" type="video/mp4">
                Your browser does not support the video tag.
            </video> -->

            <div class="indv-project-bubbles-container">
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Engine programmer
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">code</span> C++ | C
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">code</span> DX11 & DX12
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">group</span> 1 member
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> ~2 year
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2023 - 2025
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">Devices</span> Windows
                </div>
            </div>
        </div>

        <CarrouselComp :cards="this.images" class="carousel-comp"/>

        <p class="project-text">
            Building Block Engine (BBE) is a passion project of mine – a C++ game engine I have been working on, built with both DirectX11 and DirectX12. 
            My main goal was to get more experience with engine and graphics programming, and to do so I decided to build most of it from scratch, 
            and use minimal amounts of libraries. Through this, I learned more about low-level graphic API’s, custom memory allocations, custom containers, and engine architecture. 
            There are some library exceptions like ImGui and stb_image. 
            <br><br>
            <i>This project is actively in development.</i>
        </p>

        <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/BBEngine" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>

        <section class="software-skills">
            <h2 class="section-header">Software skills improved this project</h2>
            <div class="software-skills-icons">
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" />
                    <p class="software-skill-title"> Language </p>
                    <p class="software-skill-text"> C | C++</p>
                </div>
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="../../assets/Image/Logos/dx11.jpg" title="DX11" />
                    <p class="software-skill-title"> Graphics API </p>
                    <p class="software-skill-text"> DX11 </p>
                </div> 
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="../../assets/Image/Logos/directx12.webp" title="PS5" />
                    <p class="software-skill-title"> Graphics API </p>
                    <p class="software-skill-text"> DX12 </p>
                </div>
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="../../assets/Image/Logos/hlsl.svg" title="hlsl" />
                    <p class="software-skill-title"> Shader language </p>
                    <p class="software-skill-text"> HLSL </p>
                </div>             
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
                    <p class="software-skill-title"> Source control </p>
                    <p class="software-skill-text"> Git </p>
                </div>
                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg" title="CMake" />
                    <p class="software-skill-title"> Building tool </p>
                    <p class="software-skill-text"> CMake </p>
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
            <h2 class="section-header">List of current features</h2>
            <div class="contribution-element-container">
                <CodeSnippetComponent>
                    <template v-slot:Title>
                        DirectX11 Renderer
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image" :src="this.contributionImages[0]"/>
                    </template>

                    <template v-slot:Text>
                        This is BBE's DirectX11 render engine, featuring a custom GLTF parser that can load most GLTF models. 
                        It also implements common rendering effects.
                        <br>
                        <b style="font-weight: 600;">It includes:</b>
                        <ul>
                            <li>Shadow mapping</li>
                            <li>Directional, spot & point lights</li>
                            <li>Texture loading / GLTF model rendering</li>
                        </ul>
                    </template>
                </CodeSnippetComponent>
                <div class="contribution-black-column"></div>
                <CodeSnippetComponent>
                    <template v-slot:Title>
                        DirectX12 Renderer
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image" :src="this.contributionImages[1]"/>
                    </template>

                    <template v-slot:Text>
                        The DirectX12 render engine is currently still in development and doesn’t have much functionality yet. 
                        I recently got GLTF models like Sponza to load with the correct textures and transforms. 
                        There is room for improvement for the way I currently load textures and need to get to a state
                        of parity with DX12 before I can consider it in a "working state".
                    </template>
                </CodeSnippetComponent>

                <div class="contribution-black-row"></div>
                
                <CodeSnippetComponent>
                    <template v-slot:Title>
                        ImGui custom editor
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image" :src="this.contributionImages[2]"/>
                    </template>

                    <template v-slot:Text>
                        I created a custom editor in ImGui (one of the few libraries used in the engine). I haven’t added much functionality yet, as my priority was in creating both render engines and create 
                        the basic functionality needed for the engine.
                        <br>
                        <b style="font-weight: 600;">It includes:</b>
                            <ul>
                                <li>Asset window with working path traversal</li>
                                <li>Hierarchy view with children</li>
                                <li>Inspector with component view for selected object</li>
                                <li>Game view with camera control</li>
                            </ul>
                    </template>
                </CodeSnippetComponent>

                <div class="contribution-black-column"></div>
                
                <CodeSnippetComponent>
                    <template v-slot:Title>
                        It also includes:
                    </template>

                    <template v-slot:Text>
                        <ul>
                            <li>Custom memory allocators</li>
                                <ul>
                                    <li>Stack, Linear/Arena, Free list, Pool, and Buddy allocator</li>
                                </ul>

                            <li>File support</li>
                            <ul>
                                <li>GLTF model loading & model parsing</li>
                                <li>BMP files & image processing</li>
                                <li>JSON files & parsing</li>
                                <li>WAV files</li>
                            </ul>
                            <li>Self-made data structures</li>
                            <ul>
                                <li>Hashmap, LinkedList, Pool, Queue, and Vector</li>
                            </ul>
                            <li>Windows API file I/O (created for cross-platform)</li>
                            <li>Multi threading worker system</li>
                            <li>Windows keyboard and mouse input</li>
                        </ul>
                    </template>
                </CodeSnippetComponent>
            </div>
        </section>

        <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/BBEngine" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Image0 from '/src/assets/Image/Portfolio/BB/img06.webp'
import Image1 from '/src/assets/Image/Portfolio/BB/img02.webp'
import Image2 from '/src/assets/Image/Portfolio/BB/img01.webp'
import Image3 from '/src/assets/Image/Portfolio/BB/img03.webp'
import Image4 from '/src/assets/Image/Portfolio/BB/img04.webp'
import Image5 from '/src/assets/Image/Portfolio/BB/img05.webp'

import con0 from '/src/assets/Image/Portfolio/BB/img01.webp'
import con1 from "/src/assets/Image/Portfolio/BB/DX12con.webp"
import con2 from "/src/assets/Image/Portfolio/BB/img02.webp"

import code0 from "../CodeSnippets/Descent/Code0.vue"
import Code1 from "../CodeSnippets/Descent/Code1.vue"

import CodeSnippetComponent from '../IndividualComponents/CodeSnippetComponent.vue'
import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue'
import Expandablevideo from '../IndividualComponents/ExpandableVideo.vue'
import ExpandableImage from '../IndividualComponents/ExpandableImage.vue'

export default {
    data() {
        return {
            name: 'DR',
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
            }
            ],
            contributionImages: [
                con0,
                con1,
                con2
            ],
        }
    },
    beforeMount() {
        this.$emit('OpenNavBar');
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = 'Stan Vogels | Building Block Engine';
            }
        },
    },
    components:{
        CarrouselComp,
        Expandablevideo,
        ExpandableImage,
        CodeSnippetComponent,
        code0,
        Code1
    }
}
</script>

<style scoped>
.header-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/BB/Header.webp');
}
</style>