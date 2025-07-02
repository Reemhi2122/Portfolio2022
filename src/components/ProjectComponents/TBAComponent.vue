<template>
    <div class="project-container">
        <div class="front-page">
            <div class="header-background">
                <div class="header-text">
                    <h1 class="header-title">To be announced AAA</h1>
                    <h2 class="header-subtitle">Climax Studios</h2>
                </div>
            </div>

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

            <p class="project-text">
                Still an in-progress, unannounced
            </p>
        </div>
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/src/assets/Image/Portfolio/TMP/Climax.webp');
}
</style>