<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
    <div>
      <ul>
        <li><slot name="a" /></li>
        <li><slot name="b" /></li>
        <li><slot name="c" /></li>
      </ul>
      <br>
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
.etc {
  color: green;
  background-color: #eee;
  font-size: 12pt;
  padding: 8px;
}
</style>
