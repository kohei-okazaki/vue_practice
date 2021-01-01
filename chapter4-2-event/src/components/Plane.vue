<template>
  <div>
    <h1>{{ title }}</h1>
    <pre v-on:click="clear">{{ message }}</pre>
    <div id="out" class="out" v-on:click="a_event">A
      <div id="mid" class="mid" v-on:click="b_event">B
        <div id="in" class="in" v-on:click="c_event">C
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Plane',
  props: {
    title: String
  },
  data: function() {
    return {
      message: ''
    };
  },
  methods: {
    a_event: function(event) {
      this.message += "A-event [" + event.target.id + ' -> '+ event.currentTarget .id + "]\n";
    },
    b_event: function(event) {
      this.message += "B-event [" + event.target.id + ' -> '+ event.currentTarget .id + "]\n";
    },
    c_event: function(event) {
      this.message += "C-event [" + event.target.id + ' -> '+ event.currentTarget .id + "]\n";
    },
    clear: function() {
      this.message = '';
    }
  }
}
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
