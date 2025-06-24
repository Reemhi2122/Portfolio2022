<template>
  <RouterLink to="/DescentRaytraced" class="feature-project">
    <div class="feature-text-box">
      <h1>Descent Raytraced</h1>
      <h2>Descent (1995), but raytraced</h2>
      
      <div class="project-bubbles-container-feature">
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">engineering</span> Engine programmer
        </div>
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">Devices</span> PlayStation
        </div>
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">group</span> 7 members
        </div>
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">schedule</span> 1 year
        </div>
        <div class="project-bubbles-feature">
          <span class="material-symbols-outlined">calendar_month</span> 2022/2023
        </div>
      </div>

    </div>
  </RouterLink>
</template>

<script>
export default {
  data() {
    return {
      name: 'T2Feature',
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.feature-project {
  background-image: url('../../Assets/Image/Portfolio/DR/Banner.webp');
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

@media (max-width: 1000px){
  .feature-project{
    background-position: 70%;
  }
  .feature-text-box {
    margin-right: 10px;
  }
}
</style>

<style>
.project-bubbles-container-feature {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  float: right;
  max-width: 80vw;
  margin: 0;
}

.project-bubbles-feature {
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
  margin-top: 5px;
  margin-left: 10px;
  
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>