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
  name: 'BaseTransition',
  props: {
    title: String
  },
  data: function() {
    return {
      message: 'Transition Sample!',
      flg: true,
      btn: 'Show / Hide'
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
p.trans {
  background-color: #ddf;
  padding: 10px;
  font-size: 20pt;
}
</style>
