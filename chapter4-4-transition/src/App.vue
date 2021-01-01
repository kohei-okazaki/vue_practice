<template>
  <div id="app">
    <BaseTransition title="BASE_TRANSITION"/>

    <FadeTransition title="FADE_TRANSITION"/>

    <EventFadeTransition title="EVENT_FADE_TRANSITION"/>

    <BaseTransform title="BASE_TRANSFORM"/>
  </div>
</template>

<script>
import BaseTransition from './components/BaseTransition.vue'
import FadeTransition from './components/FadeTransition.vue'
import EventFadeTransition from './components/EventFadeTransition.vue'
import BaseTransform from './components/BaseTransform.vue'

export default {
  name: 'App',
  components: {
    BaseTransition,
    FadeTransition,
    EventFadeTransition,
    BaseTransform
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
