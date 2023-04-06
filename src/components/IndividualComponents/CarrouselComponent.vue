<template>
  <div class="carousel-container">
      <button @click="prev">
        <span style="width: 20px;" class="material-symbols-outlined">
        arrow_back_ios
        </span>
      </button>
      <div class="carousel">
        <div class="inner" ref="inner" :style="innerStyles">
            <div class="card" v-for="card in cards" :key="card">
                <expandableimage class="inner-card" :src="card.src" :key="card.index"/>
            </div>
        </div>
      </div>
      <button @click="next">
        <span style="width: 20px;" class="material-symbols-outlined">
        arrow_forward_ios
        </span>
      </button>
  </div>
</template>

<script>
import expandableimage from '../IndividualComponents/expandableimage.vue'

  export default {
    data () {
      return {
        innerStyles: {},
        step: '',
        transitioning: false
      }
    },
    mounted () {
      this.setStep();
      this.resetTranslate();
      window.addEventListener('resize', this.setStep);
    },
    beforeDestroy(){
      window.removeEventListener('resize', this.setStep);
    },
    methods: {
      setStep () {
        const innerWidth = this.$refs.inner.scrollWidth;
        const totalCards = this.cards.length;
        this.step = `${innerWidth / totalCards}px`;
        this.resetTranslate();
      },
      next () {
        if (this.transitioning) return
        this.transitioning = true
        this.moveLeft()
        this.afterTransition(() => {
          const card = this.cards.shift()
          this.cards.push(card)
          this.resetTranslate()
          this.transitioning = false
        })
      },
      prev () {
        if (this.transitioning) return
        this.transitioning = true
        this.moveRight()
        this.afterTransition(() => {
          const card = this.cards.pop()
          this.cards.unshift(card)
          this.resetTranslate()
          this.transitioning = false
        })
      },
      moveLeft () {
        this.innerStyles = {
          transform: `translateX(-${this.step})
                      translateX(-${this.step})`
        }
      },
      moveRight () {
        this.innerStyles = {
          transform: `translateX(${this.step})
                      translateX(-${this.step})`
        }
      },
      afterTransition (callback) {
        const listener = () => {
          callback()
          this.$refs.inner.removeEventListener('transitionend', listener)
        }
        this.$refs.inner.addEventListener('transitionend', listener)
      },
      resetTranslate () {
        this.innerStyles = {
          transition: 'none',
          transform: `translateX(-${this.step})`
        }
      }
    },
    components:{
      expandableimage
    },
    props: ['cards']
  }
  </script>
  
<style>
.carousel-container{
  display: flex;
  align-items: center;
}

.carousel {
    overflow: hidden;
    margin: 0;
    width: 100%;
}

.inner {
    transition: transform 0.2s;
    white-space: nowrap;
}
.card {
    width: 33%;
    margin-right: 10px;
    display: inline-flex;
}
.inner-card{
    width: 100%;
}
/* optional */
button {
  background-color: white;
  border: none;
}

button > span{
  margin-right: 0 !important;
  font-weight: 200;
}

@media (max-width: 600px) {
  .card {
    width: 50%;
  }
}

</style>