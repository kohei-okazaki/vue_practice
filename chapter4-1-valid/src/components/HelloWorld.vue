<template>
  <div class="hello">
    <h1>---Validation---</h1>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <p>Number: {{ num }}</p>
    <p>ValidateNumber: {{ validateNum }}</p>

    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  props: {
    title: String,
    num: Number,

    validateNum: {
      type: Number,
      default: 1000,
      validator: function(val) {
        // valが0以上、100以下の整数の場合、True
        return val == parseInt(val) && val >= 0 && val <= 100
      }
    }
  },

  data: function() {
    return {
      message: 'バリデーション・チェック',
      val: 10
    };
  }

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
