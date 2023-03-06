<template>
  <RouterLink to="/InSheepsClothing" class="feature-project">
    <!-- <video class="video" autoplay muted>
      <source src="/src/assets/Image/Portfolio/ISC/InSheepsClothing.mp4" type="video/mp4" loop>
    </video> -->

    <div class="feature-text-box">
      <h1>In sheeps clothing</h1>
      <h2>Arcade game</h2>
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
  background-image: url('/src/Assets/Image/Portfolio/ISC/Header.png');
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  background-size: cover;
  position: fixed;
  color: white;
}

.video {
  height: 100%;
  width: 177.77777778vh;
  /* 100 * 16 / 9 */
  min-width: 100%;
  min-height: 56.25vw;
  /* 100 * 9 / 16 */
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

@media (max-width: 1000px) {
  .feature-project{
    background-position: 80%;
  }
  .feature-text-box {
    margin-right: 10px;
  }
}
</style>