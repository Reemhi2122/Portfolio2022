<template>
  <RouterLink to="/InSheepsClothing" class="feature-project">
    
    <div class="feature-awards">
      <img class="feature-awards-img" src="/src/assets/Image/Logos/INDIGO_Selection_white.png">
    </div>
    
    <div class="feature-text-box">
      <h1>In sheep's clothing</h1>
      <h2>VR arcade game</h2>
    
      <div class="project-bubbles-container-feature">
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">engineering</span> Gameplay programmer
        </div>
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">group</span> 2 members
        </div>
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">schedule</span> 6 months
        </div>
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">calendar_month</span> 2022/2023
        </div>
      </div>

    </div>
  </RouterLink>
</template>
    
<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      name: "T1Feature",
    };
  },
  methods: {},
  components: { RouterLink }
}
</script>

<style scoped>
.feature-project {
  background-image: url('/src/Assets/Image/Portfolio/ISC/header.webp');
  width: 100%;
  height: 100dvh;
  background-size: cover;
  position: fixed;
  color: white;
}

.feature-text-box {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 25px;
  margin-bottom: 20px;
  text-align: right;
}

.feature-text-box>h1 {
  font-weight: 600;
  font-size: 35px;
}

.feature-text-box>h2 {
  font-weight: 200;
  font-size: 25px;
  margin-top: -10px;
}

.feature-awards{
  position: absolute;
  top:0;
  right: 0;

  margin-right: 25px;
  margin-top: 25px;
}

.feature-awards-img{
  width: 200px;
}

@media (max-width: 1000px) {
  .feature-project{
    background-position: 80%;
  }
  .feature-text-box {
    margin-right: 10px;
  }

  .feature-awards{
    margin-top: 80px;
  }

  .feature-awards-img{
    width: 100px;
  }

}
</style>