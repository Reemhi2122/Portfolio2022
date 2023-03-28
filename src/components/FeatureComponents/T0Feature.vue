<template>    
  <RouterLink to="/GudenuffEngine" class="feature-project">
    <div class="feature-text-box">
      <h1>Gudenuff Engine - Setsuko</h1>
      <h2>Game created in custom engine</h2>
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
  background-image: url('/src/Assets/Image/Portfolio/GE/GEHeader.jpg');
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  background-size: cover;
  position: fixed;
  color: white;
}

.feature-text-box{
  position:absolute;
  bottom:0;
  right:0;
  margin-right: 25px;;
  margin-bottom: 20px;
  width: 800px;
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
</style>>