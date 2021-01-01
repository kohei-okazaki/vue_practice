<template>
  <div class="hello">

    <!-- 監視 -->
    <h1>---{{ title }}---</h1>
    <div>Value: <input type="number" v-model="val"></div>
    <div style="height: 10px;"></div>
    <table>
      <tr>
        <th>add:</th>
        <td>{{ add }}</td>
      </tr>
      <tr>
        <th>sub:</th>
        <td>{{ sub }}</td>
      </tr>
      <tr>
        <th>multiple:</th>
        <td>{{ mult }}</td>
      </tr>
      <tr>
        <th>divide:</th>
        <td>{{ div }}</td>
      </tr>
    </table>

    <hr>
  </div>
</template>

<script>
export default {
  name: 'Watch',

  props: {
    title: String
  },

  data: function() {
    return {
      message: '値の監視',
      val: 0,
      add: 0,
      sub: 0,
      mult: 0,
      div: 0,
    };
  },

  watch: {
    val: function(value) {
      this.val = value;
      var val = parseInt(value);
      this.add = Math.floor(val + 2);
      this.sub = Math.floor(val - 2);
      this.mult = Math.floor(val * 2);
      this.div = Math.floor(val / 2);
    }
  }

}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}

input {
  margin-bottom:10px;
}
input:first-of-type
{
  margin-top:35px;
}
input, textarea {
  color: black;
  font-size: 1em;
  padding: 15px 10px 10px;
  font-family: 'Source Sans Pro',arial,sans-serif;
  border: 1px solid #cecece;
  background: #d7d7d7;
  color:#FAFAFA;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 80%;
  max-width: 600px;
}
::-webkit-input-placeholder {
   color: #FAFAFA;
}
:-moz-placeholder {
   color: #FAFAFA;  
}
::-moz-placeholder {
   color: #FAFAFA; 
}
:-ms-input-placeholder {  
   color: #FAFAFA;  
}
</style>
