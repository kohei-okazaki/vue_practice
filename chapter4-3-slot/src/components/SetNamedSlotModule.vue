<template>
  <div>
    <h3>{{ title }}</h3>
    <ol>
      <slot name="slotlist" />
    </ol>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'SetNamedSlotModule',
  props: {
    title: String
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
