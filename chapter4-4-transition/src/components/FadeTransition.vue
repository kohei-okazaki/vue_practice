<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="doAction">{{ btn }}</button>
    <transition name="transit">
      <p v-if="flg" class="trans">Transition!</p>
    </transition>
    
    <hr>
  </div>
</template>

<script>
export default {
  name: 'FadeTransition',
  props: {
    title: String
  },
  data: function() {
    return {
      message: 'Fade Transition!',
      flg: true,
      btn: 'Fade out / Fade in '
    };
  },
  methods: {
    doAction: function() {
      this.flg = !this.flg;
    }
  }
}
</script>

<style scoped>
.trans {
  background-color: #ddf;
  padding: 10px;
  font-size: 20pt;
}

.transit-enter-active {
  transition: opacity 0.5s;
}
.transit-enter {
  opacity: 0;
}
.transit-enter-to {
  opacity: 1.0;
}

.transit-leave-active {
  transition: opacity 5.0s;
}
.transit-leave {
  opacity: 1.0;
}
.transit-leave-to {
  opacity: 0;
}

</style>
