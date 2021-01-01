<template>
  <div>
    <h1>{{ title }}</h1>
    <pre>{{ message }}</pre>
    <!-- 
    <div class="area"
      v-on:click="click"
      v-on:click.exact="exact"
      v-on:click.shift="shift"
      v-on:click.ctrl="ctrl"
      v-on:click.alt="alt">
      Click Here!!!
    </div>
    -->
    <div class="area"
      v-on:click.exact="exact"
      v-on:click.shift="shift"
      v-on:click.ctrl="ctrl"
      v-on:click.alt="alt">
      Click Here!!!
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "FunctionKey",
  props: {
    title: String,
  },
  data: function () {
    return {
      message: "",
    };
  },
  methods: {
    click: function () {
      this.message = "Click ";
    },
    exact: function () {
      this.message += "** No Any Key **";
    },
    shift: function () {
      this.message += "[shift]";
    },
    ctrl: function () {
      this.message += "[ctrl]";
    },
    alt: function () {
      this.message += "[alt]";
    },
  },
};
</script>

<style scoped>
pre {
  font-size: 14pt;
  line-height: 1.25;
}
.area {
  width: 300px;
  height: 100px;
  background-color: chartreuse;
  padding: 10px;
  font-size: 20pt;
}
</style>
