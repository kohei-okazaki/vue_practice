<template>
  <div class="hello">

    <!-- setter getter -->
    <h1>---{{ title }}---</h1>
    <!-- 算出 -->
    <p>結果= {{ val }}</p>
    <div>2倍 = <input type="text" v-model="a"></div>
    <div>2乗 = <input type="text" v-model="b"></div>

    <hr>
  </div>
</template>

<script>
export default {
  name: 'Accessor',
  props: {
    title: String
  },
  data: function() {
    return {
      val: 10
    };
  },
  computed: {
    a: {
      get: function() {
        return this.val * 2;
      },
      set: function(value) {
        this.val = Math.floor(value / 2);
      }
    },

    b: {
      get: function() {
        return this.val * this.val;
      },
      set: function(value) {
        this.val = Math.floor(Math.sqrt(value));
      }
    }
  },
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
