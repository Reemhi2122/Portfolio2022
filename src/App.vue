<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBarComponent.vue'
import Projects from './components/ProjectsComponent.vue'

import T0Feature from './components/FeatureComponents/T0Feature.vue'
import T1Feature from './components/FeatureComponents/T1Feature.vue'
import T2Feature from './components/FeatureComponents/T2Feature.vue'

import MobileNav from './components/MobileNavComponent.vue'
</script>
<template>
  <div class="home-wrapper">

    <component :is="selectedComponent"></component>

    <div class="white-overlay">
      <svg class="triangle-parent" fill="#fff" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon class="triangle" points="0 0, 100 0, 0 100" />
      </svg>

      <div class="home-section">
        <h1 class="home-title">Stan Vogels</h1>
        <h2 class="home-subtitle">C++ gameplay programmer</h2>
      </div>
    </div>

    <RouterLink class="mobile-nav-container" :to="GetMobileNavRoute()">
      <div class="mobile-nav-blackline"></div>
      <div class="mobile-nav-blackline"></div>
      <div class="mobile-nav-blackline"></div>
    </RouterLink>

    <div class="feature-buttons">
      <button class="feature-button" :class="[active[0] ? 'b-active' : '']"  @click="ChangeFeatureTo('T2Feature', 0)"></button>
      <button class="feature-button" :class="[active[1] ? 'b-active' : '']" @click="ChangeFeatureTo('T1Feature', 1)"></button>
      <button class="feature-button" :class="[active[2] ? 'b-active' : '']" @click="ChangeFeatureTo('T0Feature', 2)"></button>
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

export default {
  data() {
    return {
      name: 'app',
      selectedComponent: "",
      mobileNavRouterToggle: true,
      previousRoute: '/',
      active: [false,true,false]
    }
  },
  mounted(){
    this.ChangeFeatureTo("T2Feature", 0);
  },
  methods: {
    GetMobileNavRoute(){
      if(this.$route.name == "mobileNav"){
        return this.previousRoute;
      }
      
      this.previousRoute = this.$route.path;
      return "/mobileNav";
    },
    OpenNavBar() {
      this.$refs.NavBarRef.OpenNavBar();
    },
    CloseNavBar() {
      this.$refs.NavBarRef.CloseNavBar();
    },
    ChangeFeatureTo(id, inc) {
      this.selectedComponent = id;
      this.active = [false,false,false];
      this.active[inc] = true;
    }
  },
  components: {
    NavBar,
    Projects,
    T0Feature,
    T1Feature,
    T2Feature,
    MobileNav
  },
}
</script>

<style scoped>
.home-wrapper {
  position: static;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.feature-buttons {
  position: absolute;
  top: 0;
  right: 0;
  height: 90px;
  width: 30px;
  margin-top: calc(50vh - 45px);
  margin-right: 10px;
}

.feature-button {
  width: 25px;
  height: 25px;
  margin-bottom: 10px;
  border: none;
  border-radius: 100px;
  background-color: white;
}

.feature-button:hover{
  background-color: #12616A;
}

.b-active{
  background-color: #1CA3B2;
}

.white-overlay {
  width: 100%;
  height: 100vh;
  pointer-events: none;
}

.triangle-parent {
  width: 40%;
  height: 50vh;
}

.triangle {
  margin: 0;
  pointer-events: all;
}

.home-section {
  position: absolute;
  top: 0;
  width: 22.5vw;
  height: 25vh;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
}

.home-title {
  font-weight: 700;
  font-size: 3vw;
}

.home-subtitle {
  font-size: 1.0vw;
  margin-top: -0.5vw;
}

.mobile-nav-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 40px;
  margin-top: 25px;
  margin-right: 25px;
  z-index: 10;
  visibility: hidden;
}

.mobile-nav-blackline {
  width: 100%;
  height: 25%;
  background-color: white;
  margin-bottom: 10%;
}

.route-enter-from {
  opacity: 0;
}

.route-enter-active {
  transition: all 2s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.2s ease-in;
}

@media(max-width: 1000px) {
  .mobile-nav-container {
    visibility: visible;
  }

  .triangle-parent {
    width: 70%;
    height: 40vh;
  }

  .home-section {
    width: 45vw;
    height: 20vh;
  }

  .home-title {
    font-size: 6vw;
  }

  .home-subtitle {
    font-size: 2.4vw;
    margin-top: -1.2vw;
  }
}
</style>
