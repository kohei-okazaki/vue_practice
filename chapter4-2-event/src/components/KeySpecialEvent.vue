<template>
  <div>
    <h1>{{ title }}</h1>
    <pre>{{ message }}</pre>
    <div>
      <input type="text"
        v-on:keypress="type"
        v-on:keydown.delete="clear"
        v-on:keydown.space="space"
        v-on:keydown.enter="enter" />
      <br /><br /><br />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "KeySpecialEvent",
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
      if (event.key == "Enter") {
        return;
      }
      this.message += event.key + " ";
      event.target.value = "";
    },
    clear: function () {
      this.message = "";
    },
    space: function () {
      this.message += "_ ";
    },
    enter: function (event) {
      let res = this.message.split(" ").join("");
      this.message = res.split("_").join(" ");
      event.target.value = "";
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
