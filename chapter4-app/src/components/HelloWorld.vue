<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr>
    <div>
      <input type="text" v-model="input">

      <br><br>

      <button v-on:click="doAction">クリック</button>
    </div>
  </div>
</template>

<script>

// componentのスクリプト部分の定義
export default {
  name: 'HelloWorld',

  props: {
    title: String
  },

  data: function() {
    var data = {
      message: 'お名前は？',
      input: ''
    };
    return data;
  },

  methods: {
    doAction: function() {
      this.message = 'CHILD_COMPONENT こんにちは、' + this.input + 'さん';
      // 子から親へ
      this.$emit('result-event', this.input);
    }
  }
}
</script>

<style>
div {
  margin: 0px;
  padding: 0px;
  text-align: left;
}
h1 {
  font-size: 71pt;
  font-weight: bold;
  text-align: right;
  letter-spacing: -8px;
  color: #f0f0f0;
  margin: 0px;
}
p {
  margin: 0px;
  color: #666;
  font-size: 16pt;
}
</style>
