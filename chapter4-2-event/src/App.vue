<template>
  <div id="app">
    <Plane title="PLANE" />
    <Stop title="STOP" />
    <Self title="SELF" />

    <KeyEvent title="KEY_EVENT" />
    <KeySpecialEvent title="KEY_SPECIAL_EVENT" />
    <FunctionKey title="FUNCTION_KEY" />
  </div>
</template>

<script>
import Stop from "./components/Stop.vue";
import Self from "./components/Self.vue";
import Plane from "./components/Plane.vue";
import KeyEvent from "./components/KeyEvent.vue";
import KeySpecialEvent from "./components/KeySpecialEvent.vue";
import FunctionKey from "./components/FunctionKey.vue";

export default {
  name: "App",
  components: {
    Stop,
    Self,
    Plane,
    KeyEvent,
    KeySpecialEvent,
    FunctionKey
  },
};
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
