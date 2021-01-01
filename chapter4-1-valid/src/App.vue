<template>
  <div id="app">
    <HelloWorld 
      v-bind:title="title_val" 
      v-bind:num="num_val" 
      v-bind:validateNum="validate_num" />

    <Accessor title="Setter or Getter" />

    <Watch title="監視" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Accessor from './components/Accessor.vue'
import Watch from './components/Watch.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Accessor,
    Watch
  },

  data: function() {
    // v-bind=${XXX}に指定
    return {
      title_val: 'validate',
      num_val: 9,
      validate_num: 0
    };
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
