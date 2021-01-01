<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>

    <button @click="doAction">{{ btn }}</button>
    <transition name="transit"
      @before-enter="startAction"
      @before-leave="startAction"
      @after-enter="endAction"
      @after-leave="endAction">
      <p v-if="flg" class="trans">Transition!</p>
    </transition>

    <hr />
  </div>
</template>

<script>
export default {
  name: "FadeTransition",
  props: {
    title: String,
  },
  data: function () {
    return {
      message: "Event Fade Transition!",
      flg: true,
      btn: "Hide",
    };
  },
  methods: {
    doAction: function () {
      this.flg = !this.flg;
    },
    startAction: function () {
      if (this.flg) {
        this.message = "現れます...";
      } else {
        this.message = "消えます...";
      }
    },
    endAction: function () {
      if (this.flg) {
        this.btn = "Hide";
        this.message = "現れました...";
      } else {
        this.btn = "Show";
        this.message = "消えました...";
      }
    },
  },
};
</script>

<style scoped>
.trans {
  background-color: #ddf;
  padding: 10px;
  font-size: 20pt;
}

.transit-enter-active {
  transition: opacity 0.5s;
}
.transit-enter {
  opacity: 0;
}
.transit-enter-to {
  opacity: 1;
}

.transit-leave-active {
  transition: opacity 3s;
}
.transit-leave {
  opacity: 1;
}
.transit-leave-to {
  opacity: 0;
}
</style>
