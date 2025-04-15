<template>
    <div class="contribution-element">
        <p class="contribution-element-title"><slot name="Title"></slot></p>
        
        <slot name="Image"></slot>
        
        <p class="contribution-text">
            <slot name="Text"></slot>
        </p>

        <p>
            <slot name="reason-no-code"></slot>
        </p>

        <div v-if="hascode">
          <div :class="{'expanded-code-snippet-parent': contributionState}">
              <button v-show="contributionState" @click="ToggleSnippet()" class="expanded-code-button">X</button>
              <pre class="code-snippet" :class="{'expanded-code-snippet': contributionState}">
<code class="language-csharp"><slot name="Code"></slot></code>
              </pre>
          </div>
          <div class="code-snippet-button-container">
              <button type="button" @click="ToggleSnippet()" class="code-snippet-button">Open Snippet</button>
              <a v-if="link" :href="link" class="code-snippet-button" target="_blank">View on github</a>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'snippet',
      contributionState: false,
    }
  },
  props: ['link', 'hascode'],
  mounted() {
    Prism.highlightAll();
  },
  updated(){
    Prism.highlightAll();
  },
  methods: {
    ToggleSnippet(){
      this.contributionState = !this.contributionState;
    }
  },
  components:{
  }
}
</script>

<style scoped>
.contribution-element{
  display: flex;
  flex-direction: column;
  grid-column: span 3;
}

.contribution-element-big{
  grid-column: span 6 !important;
}

.contribution-element-title {
  font-weight: 500;
  font-size: 25px;
  font-style: italic;
}

.contribution-text {
  font-size: 20px;
  flex: 1;
}

.code-snippet{
    max-width: 100%;
    max-height: 400px;  
    margin-top: 10px;
}

.expanded-code-snippet-parent{
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9;
}

.expanded-code-button{
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 10;
  width: 40px;
  height: 40px;

  border: white solid 2px;
  background-color: transparent;
  color: white;
  font-weight:600;
  font-size: 24px;

  border-radius: 2px;
}

.expanded-code-snippet{
  position: absolute;
  top: 120px;
  bottom: 5%;
  left: 20%;
  right: 20%;

  max-height: 100vh;
}

.code-snippet-button-container{
  display: flex;
  justify-content: center;
}

.code-snippet-button{
  border: 2px solid black;
  text-align: center;
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 5px 10px;
  margin-left: 10px;
  margin-right: 10px;
  width: 120px;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
}

@media (max-width: 1000px) {
  .expanded-code-snippet{
    top: 100px;
    bottom: 5%;
    left: 5%;
    right: 5%;
  }

  .expanded-code-button{
    left: 20px;
    top: 20px;
  }

  .contribution-element {
    margin-bottom: 10px;
  }
}

</style>