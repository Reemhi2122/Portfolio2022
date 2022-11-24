<template>    
    <div class="feature-project">
          <div class="feature-text-box">
            <h1>Test1</h1>
            <h2>Test2</h2>
          </div>
        </div>
    </template>
    
    <script>
      export default{
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
    .feature-project{
      background-image: url('../../Assets/Image/Portfolio/CG/PIChess.jpg');
      width: 100%;
      height: 100vh;
      background-size: cover;
      position: fixed;
      color: white;
    }
    
    .feature-text-box{
      position:absolute;
      bottom:0;
      right:0;
      margin-right: 50px;
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
    </style>>