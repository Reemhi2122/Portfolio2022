<template>
  <div class="projects-grid">
    <h1 class="tab-title">Projects</h1>

    <div class="tab-whiteline"></div>
    <div id="projects-container-viewport">
      <div class="projects-container">

        <Transition>
          <div class="portfolio-item large DR">
            <RouterLink to="/DescentRaytraced">
              <div class="div-darken"></div>

              <div class="project-awards">
                  <img class="project-awards-img" src="/src/assets/Image/Logos/pcgamer.webp">
              </div>

              <div class="project-description">
                <p class="project-title">Descent raytraced</p>
                <p class="project-tags">Game-rework | C | C++</p>

                <div class="project-bubbles-container">
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Engine programmer
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">Devices</span> PlayStation
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">group</span> 7 members
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 1 year
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2022/2023
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </Transition>

        <Transition>
          <div class="portfolio-item medium BB">
            <RouterLink to="/BuildingBlockEngine">
              <div class="div-darken"></div>
              <div class="project-description">
                <p class="project-title">Building Block Engine [WIP]</p>
                <p class="project-tags">Custom engine | C++ | DX11</p>

                <div class="project-bubbles-container">
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Engine programmer
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">group</span> 1 member
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> ~2 years
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2023 - 2025
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </Transition>

        <Transition>
          <div class="portfolio-item medium GE">
            <RouterLink to="/GudenuffEngine">
              <div class="div-darken"></div>
              <div class="project-description">
                <p class="project-title">Gudenuff Engine - Setsuko</p>
                <p class="project-tags">Custom engine | C++</p>

                <div class="project-bubbles-container">
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Generalist programmer
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">group</span> 12 members
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 8 weeks
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2022
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </Transition>

        <Transition>
          <div class="portfolio-item medium ISC">
            <RouterLink to="/InSheepsClothing">
              <div class="div-darken"></div>
              
              <div class="project-awards">
                  <img class="project-awards-img" src="/src/assets/Image/Logos/INDIGO_Selection_white.png">
              </div>

              <div class="project-description">
                <p class="project-title">In sheep's clothing</p>
                <p class="project-tags">Game | Unity | C#</p>

                <div class="project-bubbles-container">
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Gameplay programmer
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">group</span> 2 members
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 6 months
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2022/2023
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </Transition>

        <Transition>
          <div class="portfolio-item medium RT">
            <RouterLink to="/Raytracer">
              <div class="div-darken"></div>
              <div class="project-description">
                <p class="project-title">Raytracer</p>
                <p class="project-tags">Rendering | C++ | Math</p>

                <div class="project-bubbles-container">
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Graphics programmer
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">group</span> 1 members
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 8 weeks
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2020
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </Transition>

        <Transition>
          <div class="portfolio-item medium COTF">
            <RouterLink to="/CryOfTheFox">
              <div class="div-darken"></div>
              <div class="project-description">
                <p class="project-title">Cry of the fox</p>
                <p class="project-tags">Game | Unreal Engine | Blueprint | C++</p>

                <div class="project-bubbles-container">
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Gameplay programmer
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">group</span> 8 members
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 8 weeks
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2021
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </Transition>

        <Transition>
          <div class="portfolio-item medium CC">
            <RouterLink to="/ColdCandy">
              <div class="div-darken"></div>
              <div class="project-description">
                <p class="project-title">Cold Candy</p>
                <p class="project-tags">Game | Unreal Engine 4 | Blueprints</p>

                <div class="project-bubbles-container">
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Gameplay programmer
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">group</span> 12 members
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 8 weeks
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2021
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </Transition>

        <Transition>
          <div class="portfolio-item medium DD">
            <RouterLink to="/DonutDrifters">
              <div class="div-darken"></div>
              <div class="project-description">
                <p class="project-title">Donut Drifters</p>
                <p class="project-tags">Game | Unreal Engine 4 | 2021</p>

                <div class="project-bubbles-container">
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">engineering</span> Gameplay programmer
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">group</span> 8 members
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">schedule</span> 2 weeks
                  </div>
                  <div class="project-bubbles">
                    <span class="material-symbols-outlined">calendar_month</span> 2021
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Projects',
      filters: [true, true, true],
      showFilters: true
    }
  },
  beforeMount() {
    this.$emit('OpenNavBar');
  },
  mounted() {
    this.IsMobile();
    window.addEventListener('resize', this.IsMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.IsMobile);
  },
  methods: {
    ToggleFilter(index) {
      this.filters[index] = !this.filters[index];
    },
    IsMobile() {
      if (window.innerWidth <= 1000) {
        this.showFilters = false
        this.filters = [1, 1, 1];
      } else {
        this.showFilters = true
      }
    }
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
  top: 0;
  width: 70%;
  position: absolute;
  margin-top: calc(50px + 4vh);
  height: calc(92.5vh - (50px + 4vh));
  margin-left: 15%;
}

.tab-filter>h3 {
  color: white;
  margin-left: 10px;
  font-weight: 100;
}

.filter-bubbles {
  padding: 5px 10px;
  border-radius: 10px;
  margin-left: 10px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-content: center;
}

.filter-bubbles:hover {
  background-color: rgb(143, 143, 143);
}

.filter-active {
  background-color: white;
  color: black;
}

.filter-non-active {
  background-color: rgb(65, 65, 65);
  color: white;
}

.tab-title {
  display: inline;
  font-weight: 200;
  font-size: 45px;
  color: white;
}

.tab-whiteline {
  height: 2px;
  background-color: white;
}

#projects-container-viewport {
  margin-top: 1.5vh;
  height: calc(100% - (1.5vh + 52px + 2px));
  overflow: hidden;
}

.projects-container {
  display: -ms-grid;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, 200px);
  grid-gap: 10px;
  pointer-events: auto;
  overflow-y: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #ffffff00;
}

::-webkit-scrollbar-thumb {
  background: #ffffff;
  border-radius: 50px;
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

  transition: transform 0.25s;
}

.portfolio-item:hover{
  transform:scale(1.01);
}

.portfolio-item.small {
  -ms-grid-column-span: 1;
  grid-column: span 1;
  -ms-grid-row-span: 1;
  grid-row: span 1;
}

.portfolio-item.medium {
  -ms-grid-column-span: 2;
  grid-column: span 2;
  -ms-grid-row-span: 2;
  grid-row: span 2;
}

.portfolio-item.large {
  -ms-grid-column-span: 4;
  grid-column: span 4;
  -ms-grid-row-span: 2;
  grid-row: span 2;
}

.portfolio-item.ISC {
  background-image: url(/src/assets/Image/Portfolio/ISC/Header.webp);
}

.portfolio-item.BB {
  background-image: url(/src/assets/Image/Portfolio/BB/Header.webp);
}

.portfolio-item.COTF {
  background-image: url(/src/assets/Image/Portfolio/COTF/Header.webp);
}

.portfolio-item.GE {
  background-image: url(/src/assets/Image/Portfolio/GE/GEHeader.webp);
}

.portfolio-item.DD {
  background-image: url(/src/assets/Image/Portfolio/DD/DDFront.webp);
}

.portfolio-item.DR {
  background-image: url(/src/assets/Image/Portfolio/DR/Banner.webp);
}
.portfolio-item.RT {
  background-image: url(/src/assets/Image/Portfolio/RT/RT8.webp);
}
.portfolio-item.RLE {
  background-image: url(/src/assets/Image/Portfolio/RLE/RLE.webp);
}
.portfolio-item.RTSE {
  background-image: url(/src/assets/Image/Portfolio/RTSE/RTSEngine.webp);
}
.portfolio-item.CC{
  background-image: url(/src/assets/Image/Portfolio/CC/img1.webp);
}

.portfolio-item>a {
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.project-awards{
  position: absolute;
  top:0;
  right: 0;

  margin-top: 10px;
  margin-right: 10px;
}

.project-awards-img{
  width: 120px;
}

.project-description {
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
  margin-left: 15px;
  color: white;
}

.project-title {
  font-weight: 500;
  font-size: 20px;
}

.project-tags {
  font-weight: 300;
  font-size: 20px;
  margin-top: -5px;
}

.project-bubbles-container {
  display: flex;
  flex-wrap: wrap;
}

.project-bubbles {
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
  margin-right: 10px;
  margin-top: 5px;

  display: flex;
  justify-content: center;
  align-content: center;
}

.material-symbols-outlined {
  margin-right: 5px;
}

.div-darken {
  width: 100%;
  height: 100%;
  background-color: black;
  background: linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 50%);
  opacity: 0.6;
  position: absolute;
  transition: 0.4s;
}

.portfolio-item:hover .div-darken {
  background: linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 50%);
  opacity: 0.5;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (max-width: 1500px) {
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 300px);
  }

  .portfolio-item.small {
    -ms-grid-column-span: 1;
    grid-column: span 1;
    -ms-grid-row-span: 1;
    grid-row: span 1;
  }

  .portfolio-item.medium {
    -ms-grid-column-span: 2;
    grid-column: span 2;
    -ms-grid-row-span: 1;
    grid-row: span 1;
  }

  .portfolio-item.large {
    -ms-grid-column-span: 2;
    grid-column: span 2;
    -ms-grid-row-span: 1;
    grid-row: span 1;
  }

  @media (max-width: 1000px) {
    .projects-grid {
      height: 90dvh;
      width: 90%;
      margin-top: 25px;
      margin-left: 5%;
    }

    .projects-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(8, 325px);
    }

    .div-darken {
      background: black;
      opacity: 0.4;
    }
  }
}
</style>