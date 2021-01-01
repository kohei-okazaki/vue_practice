<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
    <div>
      <slot />
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'SlotModule',
  props: {
    title: String
  },
  data: function() {
    return {
      message: 'This is message area.'
    }
  }
}
</script>

<style>
.inner {
  color: red;
  font-size: 14pt;
}
</style>
