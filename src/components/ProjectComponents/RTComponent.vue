<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">Raytracer</h1>
                    <h2 class="header-subtitle">Creating a custom raytracer</h2>
                </div>
            </div>

            <!-- <video class="project-video" poster="../../assets/Image/Portfolio/RT/Raytracer.jpg" controls>
                <source src="/src/assets/Image/Portfolio/RT/Raytracervid.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video> -->

            <div class="indv-project-bubbles-container">
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Graphics programmer
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">code</span> C++
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">group</span> 1 members
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 8 weeks
                </div>
                <div class="indv-project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2020
                </div>
            </div>
        </div>

        <CarrouselComp :cards="this.images" class="carousel-comp"/>

        <p class="project-text">
            In my 8-week raytracer project, I incorporated several features such as lights, Phong shading, reflection, refraction, 
            Beer's Law, specular effects, multi-threading, MSAA, and frame accumulation to improve the image quality. 
            The implementation of multi-threading accelerated the rendering process, while MSAA and frame accumulation 
            techniques reduced jagged edges and further enhanced the image quality.
        </p>

        <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/Raytracer" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>

        <section class="software-skills">
            <h2 class="section-header">Software skills improved this project</h2>
            <div class="software-skills-icons">

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" />
                    <p class="software-skill-title"> Language </p>
                    <p class="software-skill-text"> C++ </p>
                </div>       

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" title="Github Projects" />
                    <p class="software-skill-title"> Planning </p>
                    <p class="software-skill-text"> GitHub Projects </p>
                </div>

                <div class="software-skill-element">
                    <img class="software-skill-image"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
                    <p class="software-skill-title"> Source control </p>
                    <p class="software-skill-text"> Git </p>
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
            <h2 class="section-header">Highlights of this Projects</h2>
            <div class="contribution-element-container">

                <CodeSnippetComponent hascode="true" link="https://github.com/Reemhi2122/Raytracer/blob/main/RayTracer/RayTracer.cpp">
                    <template v-slot:Title>
                        Multithreading
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image" :src="this.contributionImages[0]"/>
                    </template>

                    <template v-slot:Text>
                        My raytracer project used multi-threading, with each block calculated by a separate CPU thread. While this 
                        pattern may not be the most optimized for the scene shown, it's generally effective for raytracing, leading to significant 
                        speed improvements.
                    </template>

                    <template v-slot:Code>
                        <code0/>
                    </template>
                </CodeSnippetComponent>

                <CodeSnippetComponent hascode="true" link="https://github.com/Reemhi2122/Raytracer/blob/main/RayTracer/RayTracer.cpp">
                    <template v-slot:Title>
                        Illumination and shading
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image" :src="this.contributionImages[1]"/>
                    </template>

                    <template v-slot:Text>
                        The raytracer included simple functionality like Phong shading and light attenuation. These functions
                        used the custom-made math library included in the project. These were the first steps in creating the
                        raytracer and taught me the basics of lighting and raytracing.
                    </template>

                    <template v-slot:Code>
                        <code1/>
                    </template>
                </CodeSnippetComponent>

                <CodeSnippetComponent hascode="true" link="https://github.com/Reemhi2122/Raytracer/blob/main/RayTracer/RayTracer.cpp">
                    <template v-slot:Title>
                        Reflection and Refraction and beers law
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image" :src="this.contributionImages[2]"/>
                    </template>

                    <template v-slot:Text>
                        In the example above you can see the implementation of reflections and refraction and Beers law.
                        As you can see they both cast different shadows and have an effect on each other. The
                        maximum bounce count of a ray in this scene is 5.
                    </template>

                    <template v-slot:Code>
                        <code2/>
                    </template>
                </CodeSnippetComponent>

                <CodeSnippetComponent hascode="true" link="https://github.com/Reemhi2122/Raytracer/blob/main/RayTracer/RayTracer.cpp">
                    <template v-slot:Title>
                        Math library
                    </template>

                    <template v-slot:Image>
                        <ExpandableImage class="contribution-image" :src="this.contributionImages[3]"/>
                    </template>

                    <template v-slot:Text>
                        I also created my own math library where I created my own vector and matrix 
                        structures. This comes with all the operator overloading and mathematical 
                        functions for operations like the dot product, cross product, and multiplication. 
                        I also learned the importance of a copy constructor and how to use it properly.
                    </template>

                    <template v-slot:Code>
                        <code3/>
                    </template>
                </CodeSnippetComponent>
            </div>
        </section>

        <section class="learned-section">
            <h2 class="section-header">What I have learned form this project</h2>
            <div class="learned-container">
                <div class="learned-element">
                    <h3>Optimalization</h3>
                    <p>
                        In my 8-week raytracer project, I improved my optimization skills by implementing multi-threading, 
                        frame accumulation, and MSAA techniques. I had to balance image quality and performance while 
                        prioritizing which optimizations to use to meet the deadline. The project provided valuable experience 
                        that I can apply to future career in programming.
                    </p>
                </div>
                <div class="learned-element">
                    <h3>Math library</h3>
                    <p>
                        In this project, I had the opportunity to create my own math library to perform vector and matrix operations. 
                        The library included essential vector functions such as multiplication, dot product, cross product, and normalization. 
                        For matrix operations, I implemented multiplication and addition functions to handle complex transformations. 
                        This task required a strong understanding of linear algebra concepts and their implementation in programming.
                    </p>
                </div>
                <div class="learned-element">
                    <h3>C++</h3>
                    <p>
                        This was one of my first C++ projects, so I learned a lot about memory management and working with pointers.
                         Looking back, there are definitely things I'd do differently now that I'm more experienced. But I'm still 
                         proud of how fast I was able to create a raytracer that actually works! It was a great learning experience 
                         that helped me build a solid foundation in programming and develop more advanced projects later on.
                    </p>
                </div>
            </div>
        </section>

        <div class="findcode-github">
            <h1>Find this project on</h1>
            <a href="https://github.com/Reemhi2122/Raytracer" target="_blank"><img src="/src/assets/Image/GithubIcon.png"></a>
        </div>
        <section class="empty-footer"></section>
    </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-csharp';

import Image1 from '/src/assets/Image/Portfolio/RT/RT3.webp'
import Image2 from '/src/assets/Image/Portfolio/RT/RT4.webp'
import Image3 from '/src/assets/Image/Portfolio/RT/RT5.webp'
import Image4 from '/src/assets/Image/Portfolio/RT/RT6.webp'
import Image5 from '/src/assets/Image/Portfolio/RT/Raytracer.webp'
import Image6 from '/src/assets/Image/Portfolio/RT/RT7.webp'
import Image7 from '/src/assets/Image/Portfolio/RT/RT9.webp'

import con0 from "/src/assets/Image/Portfolio/RT/contributions/RT_CON_1.webp";
import con1 from "/src/assets/Image/Portfolio/RT/contributions/RT_CON_2.webp";
import con2 from "/src/assets/Image/Portfolio/RT/contributions/RT_CON_3.webp";

import code0 from "../CodeSnippets/RT/Code0.vue"
import code1 from "../CodeSnippets/RT/Code1.vue"
import code2 from "../CodeSnippets/RT/Code2.vue"
import code3 from "../CodeSnippets/RT/Code3.vue"

import CodeSnippetComponent from '../IndividualComponents/CodeSnippetComponent.vue'
import CarrouselComp from '../IndividualComponents/CarrouselComponent.vue';
import ExpandableImage from '../IndividualComponents/ExpandableImage.vue';

export default {
    data() {
        return {
            name: 'DD',
            images: [          
            {
                src: Image1,
                index: 0
            },
            {
                src: Image7,
                index: 1
            },
            {
                src: Image5,
                index: 1
            },
            {
                src: Image4,
                index: 2
            },
            {
                src: Image6,
                index: 3
            },            
            {
                src: Image3,
                index: 4
            },
            {
                src: Image2,
                index: 5
            },
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
                document.title = 'Stan Vogels | Raytracer';
            }
        },
    },
    components:{
        CarrouselComp,
        ExpandableImage,
        CodeSnippetComponent,
        code0,
        code1,
        code2,
        code3
    }
}
</script>

<style scoped>
.header-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/Image/Portfolio/RT/RT8.webp');
}
</style>