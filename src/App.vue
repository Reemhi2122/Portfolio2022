<template>
  <div class="home-wrapper">

    <transition :name="this.slideTransition">
      <component :is="this.Components[this.selectedComponent]"></component>
    </transition>

    <div class="white-overlay">
      <svg class="triangle-parent" fill="#fff" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon class="triangle" points="0 0, 100 0, 0 100" />
      </svg>

      <div class="home-section">
        <h1 class="home-title">Stan Vogels</h1>
        <h2 class="home-subtitle">C++ Gameplay / Engine</h2>
        <h2 class="home-subtitle">Programmer</h2>
      </div>
    </div>

    <RouterLink class="mobile-nav-container" :to="GetMobileNavRoute()">
      <div class="mobile-nav-blackline"></div>
      <div class="mobile-nav-blackline"></div>
      <div class="mobile-nav-blackline"></div>
    </RouterLink>

    <div class="feature-buttons">
      <button class="feature-button" :class="[active[0] ? 'b-active' : '']"  @click="ChangeFeatureTo(0, true)"></button>
      <button class="feature-button" :class="[active[1] ? 'b-active' : '']" @click="ChangeFeatureTo(1, true)"></button>
      <button class="feature-button" :class="[active[2] ? 'b-active' : '']" @click="ChangeFeatureTo(2, true)"></button>
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
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBarComponent.vue'
import Projects from './components/ProjectsComponent.vue'

import T0Feature from './components/FeatureComponents/T0Feature.vue'
import T1Feature from './components/FeatureComponents/T1Feature.vue'
import T2Feature from './components/FeatureComponents/T2Feature.vue'

import MobileNav from './components/MobileNavComponent.vue'

export default {
  data() {
    return {
      name: 'app',
      mobileNavRouterToggle: true,
      previousRoute: '/',
      Components: ["T2Feature","T1Feature","T0Feature"],
      active: [false,true,false],
      selectedComponent: 0,
      canSlide: true,
      isNavBarOpen: false,
      slideTransition: "slideup",
      intervalId: 0,
    }
  },
  created () {
    window.addEventListener('wheel', this.HomeScrolled);
  },
  mounted(){
    this.ChangeFeatureTo(0);
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
      window.clearInterval(this.intervalId);
      this.$refs.NavBarRef.OpenNavBar();
      this.isNavBarOpen = true;
    },
    CloseNavBar() {
      this.intervalId = window.setInterval(() => {this.AutoScroll();},5000);
      this.$refs.NavBarRef.CloseNavBar();
      this.isNavBarOpen = false;
    },
    ChangeFeatureTo(id, button) {
      if(button){ 
        this.slideTransition = id > this.selectedComponent ? "slideup": "slidedown";
        window.clearInterval(this.intervalId);
        this.intervalId = window.setInterval(() => {this.AutoScroll();},8000);
      }

      this.selectedComponent = id;
      this.active = [false,false,false];
      this.active[id] = true;
    },
    HomeScrolled(e){
      if(this.canSlide && !this.isNavBarOpen){
        this.canSlide = false;
        if(e.deltaY > 0){
          this.slideTransition = "slideup";
          this.ChangeFeatureTo((this.selectedComponent + 1) % 3, false);
        }

        if(e.deltaY < 0){
          this.slideTransition = "slidedown";
          this.ChangeFeatureTo((3 + (this.selectedComponent - 1)) % 3, false);
        }

        window.clearInterval(this.intervalId);
        this.intervalId = window.setInterval(() => {this.AutoScroll();},8000);
        setTimeout(() => { this.canSlide = true; }, 1000);
      }
    },
    AutoScroll(){
      this.ChangeFeatureTo((this.selectedComponent + 1) % 3, false);
    },
    EnableSlide(){
      this.canSlide = true;
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
  background-color: #6d6d6d;
}

.feature-button:hover{
  background-color: #e6e6e6;
}

.b-active{
  background-color: #fdfdfd;
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
  margin-bottom: -5px;
}

.home-subtitle {
  font-size: 1.1vw;
  margin-top: -0.5vw;
  color: #222222;
  font-weight: 300;
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

.slidedown-enter-active,
.slidedown-leave-active,
.slideup-enter-active,
.slideup-leave-active {
  transition: all 0.4s ease-out;
}

.slideup-enter-to {
  position: absolute;
  top: 0%;
}
.slideup-enter-from {
  position: absolute;
  top: 100%;
}
.slideup-leave-to {
  position: absolute;
  bottom: 100%;
}
.slideup-leave-from {
  position: absolute;
  bottom: 0%;
}

.slidedown-enter-to {
  position: absolute;
  bottom: 0%;
}
.slidedown-enter-from {
  position: absolute;
  bottom: 100%;
}
.slidedown-leave-to {
  position: absolute;
  top: 100%;
}
.slidedown-leave-from {
  position: absolute;
  top: 0%;
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
    font-size: calc(18px + 3vw);
  }

  .home-subtitle {
    font-size: calc(10px + 0.5vw);
    margin-top: -0.8vw;
  }
}
</style>
