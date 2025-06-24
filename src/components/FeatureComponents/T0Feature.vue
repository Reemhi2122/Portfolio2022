<template>    
  <RouterLink to="/GudenuffEngine" class="feature-project">
    <div class="feature-text-box">
      <h1>Gudenuff Engine - Setsuko</h1>
      <h2>Game created in custom engine</h2>

      <div class="project-bubbles-container-feature">
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">engineering</span> Generalist programmer
        </div>
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">group</span> 12 members
        </div>
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">schedule</span> 8 weeks
        </div>
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">calendar_month</span> 2022
        </div>
      </div>

    </div>
  </RouterLink>
</template>

<script>
  export default{
  data() {
    return {
      name: 'COTFFeature',
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.feature-project{
  background-image: url('/src/Assets/Image/Portfolio/GE/GEHeaderNoLogo.webp');
  width: 100%;
  height: 100dvh;
  background-size: cover;
  position: fixed;
  color: white;
}

.feature-text-box{
  position:absolute;
  bottom:0;
  right:0;
  margin-right: 25px;
  margin-bottom: 20px;
  text-align: right;
}

.feature-text-box > h1{
  font-weight: 600;
  font-size: 35px;
}

.feature-text-box > h2{
  font-weight: 200;
  font-size: 25px;
  margin-top: -10px;
}

@media (max-width: 1000px){
  .feature-project{
    background-position: right;
  }
  .feature-text-box {
    margin-right: 10px;
  }
}
</style>