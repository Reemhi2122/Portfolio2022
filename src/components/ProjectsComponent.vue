<template>
    <div class="projects-grid">
				<h1 class="tab-title">PROJECTS</h1>
				<div class="tab-whiteline"></div>
				<div id="projects-container-viewport">
					<div class="projects-container">
						<div class="portfolio-item large COTF"><RouterLink to="/CryOfTheFox"><div class="div-darken"></div><p>Cry of the fox | C++ | 2020</p></RouterLink></div>
						<div class="portfolio-item medium ISC"><RouterLink to="/InSheepsClothing"><div class="div-darken"></div><p>InSheepsClothing | C# | 2018</p></RouterLink></div>
					</div>
				</div>
			</div>
</template>

<script>
export default{
    data() {
        return {
            name: 'Projects',
        }
    },
    methods: {
    },
    beforeMount(){
       this.$emit('OpenNavBar');
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = 'Stan Vogels | Projects';
            }
        },
    }
}
</script>

<style scoped>
.projects-grid {
    transition: 200s;
    height: 80vh;
    width: 100%;
    position: absolute;
    pointer-events: none;
}

.tab-title {
  position: absolute;
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 45px;
  color: white;
  margin-left: 15%;
  margin-top: calc(16vh - 60px);
  pointer-events: auto;
}

.tab-whiteline {
  width: 70%;
  height: 2px;
  background-color: white;
  position: absolute;
  margin-left: 15%;
  margin-top: 16vh;
}

#projects-container-viewport {
  margin: 17.5vh 15% 10% 15%;
  overflow: hidden;
  height: 90%;
}

.projects-container {
  display: -ms-grid;
  display: grid;
  height: 100%;
  /* -ms-grid-rows: 400px 10px 400px 10px 400px 10px 400px; */
  grid-template-rows: repeat(3, 400px);
  /* -ms-grid-columns: 1fr 10px 1fr; */
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  pointer-events: auto;
  overflow-y: scroll;
}

#projects-container::-webkit-scrollbar {
  display: none;
}

.portfolio-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  pointer-events: auto;
  background-position: center;
  background-size: cover;
}
.portfolio-item.small {
  -ms-grid-column-span: 1;
  grid-column: span 1;
  -ms-grid-row-span: 1;
  grid-row: span 1;
}

.portfolio-item.medium{
  -ms-grid-column-span: 2;
  grid-column: span 2;
  -ms-grid-row-span: 1;
  grid-row: span 1;
}

.portfolio-item.large {
  -ms-grid-column-span: 4;
  grid-column: span 4;
  -ms-grid-row-span: 1;
  grid-row: span 1;
}

.portfolio-item.ISC {
  background-image: url(/src/assets/Image/Portfolio/ISC/Main.jpg);
}

.portfolio-item.COTF {
  background-image: url(/src/assets/Image/Portfolio/COTF/Header.png);
}

/*
.portfolio-item.three {
  background-image: url(/src/assets/Image/Portfolio/CG/PIChess.jpg);
}
.portfolio-item.four {
  background-image: url(/src/assets/Image/Portfolio/CG/PIChess.jpg);
}
.portfolio-item.five {
  background-image: url(/src/assets/Image/Portfolio/CG/PIChess.jpg);
}
.portfolio-item.six {
  background-image: url(/src/assets/Image/Portfolio/CG/PIChess.jpg);
}
.portfolio-item.seven {
  background-image: url(/src/assets/Image/Portfolio/CG/PIChess.jpg);
} */

.portfolio-item > a {
  width: 100%;
  height: 100%;
  text-decoration: none;
}
.portfolio-item > a > p {
  font-family: montserrat, sans-serif;
  margin-top: 350px;
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  margin-left: 15px;
  color: white;
  position: relative;
}

.div-darken {
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.2; 
  position: absolute;
}

.portfolio-item:hover .div-darken {
  opacity: 0.6;
}
</style>