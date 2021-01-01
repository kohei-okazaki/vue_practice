<template>
  <div id="app">
    <HelloWorld title="Welcome to Your Vue.js App" />
    <JsxWithValue title="__JSX_WITH_VALUE__">
    </JsxWithValue>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import JsxWithValue from './components/JsxWithValue.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    JsxWithValue
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
