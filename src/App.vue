<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBarComponent.vue'
import Projects from './components/ProjectsComponent.vue'

import COTFFeature from './components//FeatureComponents/COTFFeature.vue'
import T1Feature from './components/FeatureComponents/T1Feature.vue'
import T2Feature from './components/FeatureComponents/T2Feature.vue'
</script>

<template>
  <div class="home-wrapper">

    <component :is="selectedComponent"></component>
    
    <div class="white-overlay">
      <div class="home-container">	
        <h1 class="home-title">Stan Vogels</h1>
        <h2 class="home-subtitle">Game programmer</h2>
      </div>
		</div>
    
    <div class="feature-buttons">
      <button @click="ChangeFeatureTo('COTFFeature')"></button>
      <button @click="ChangeFeatureTo('T1Feature')"></button>
      <button @click="ChangeFeatureTo('T2Feature')"></button>
    </div>
    
    <NavBar ref="NavBarRef"></NavBar>

    <RouterView @CloseNavBar="CloseNavBar()" @OpenNavBar="OpenNavBar()" v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </RouterView>
  </div>
</template>

<script>
  export default{
  data() {
    return {
      name: 'app',
      selectedComponent: "COTFFeature",
    }
  },
  methods: {
    OpenNavBar(){
      this.$refs.NavBarRef.OpenNavBar();
    },
    CloseNavBar(){
      this.$refs.NavBarRef.CloseNavBar();
    },
    ChangeFeatureTo(id){
      this.selectedComponent = id;
    }
  },
  components:{
        NavBar,
        Projects,
        COTFFeature,
        T1Feature,
        T2Feature
  },
}
</script>

<style scoped>
.home-wrapper{
  position: static;
  height: 100vh;
  width: 100%;
}

.feature-buttons{
  position: absolute;
  right: 0;
  height: 90px;
  width: 30px;
  margin-top: calc(50vh - 45px);
  margin-right: 10px;
}

.feature-buttons > button{
  width: 25px;
  height: 25px;
  margin-bottom: 10px;
  border: none;
  border-radius: 100px;
}

.white-overlay {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: -o-linear-gradient(to bottom right, #fff 20%, rgba(0, 0, 0, 0) 20%);
  background: linear-gradient(to bottom right, #fff 20%, rgba(0, 0, 0, 0) 20%);
}

 .home-container {
  position: absolute;
  text-align: center;
  margin-left: calc(10vw - 225px);
  margin-top: calc(16vh - 100px);
  width: 500px;
  height: 200px;
}

.home-title {
  font-family: montserrat, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 50px;
}

.route-enter-from{
  opacity: 0;
}

.route-enter-active{
  transition: all 2s ease-out;
}

.route-leave-to{
  opacity: 0;
}

.route-leave-active{
  transition: all 0.2s ease-in;
}
</style>
