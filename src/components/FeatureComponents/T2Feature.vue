<template>
  <RouterLink to="/DescentRaytraced" class="feature-project">
    <div class="feature-text-box">
      <h1>Descent Raytraced</h1>
      <h2>Descent (1995), but raytraced</h2>
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
  background-image: url('../../Assets/Image/Portfolio/DR/img2.png');
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  min-height: fill-available;
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
  width: 800px;
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
</style>>