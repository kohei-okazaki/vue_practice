<template>
  <div>
    <h1>{{ title }}</h1>
    <pre v-on:click="clear">{{ message }}</pre>
    <div>
      <input type="text" v-on:keydown="type" />
      <br /><br /><br />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "KeyEvent",
  props: {
    title: String,
  },
  data: function () {
    return {
      message: "",
    };
  },
  methods: {
    type: function (event) {
      if (event.key == "Process") {
        return;
      }
      console.log("event.key=" + event.key);
      this.message += event.key + " ";
      if (event.key == "Escape") {
        this.message = "";
      }
      event.target.value = "";
    },
    clear: function () {
      this.message = "";
    },
  },
};
</script>

<style scoped>
pre {
  font-size: 14pt;
  line-height: 1.25;
}
div.out {
  padding: 5px 0px;
  background-color: #eee;
  width: 300px;
  height: 200px;
}

div.mid {
  padding: 5px 0px;
  background-color: #ccc;
  width: 200px;
  height: 175px;
}

div.in {
  padding: 5px 0px;
  background-color: #aaa;
  width: 100px;
  height: 150px;
}
</style>
