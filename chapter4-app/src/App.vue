<template>
  <div id="app">
    <HelloWorld v-bind:title="message" v-on:result-event="appAction" />
    <hr>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {

  name: 'App',

  components: {
    HelloWorld
  },

  data: function() {
    return {
       message: 'Hello！！！',
       result: 'no event...'
    };
  },

  methods: {
    appAction: function(val) {
      this.result = 'PARENT_COMPONENT (*** you send :' + val + '. ***)';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
