<template>
  <div class="container">

    <p>count_action/index2.vueのコンテンツ ここから</p>

    <div>
      <Logo />
      <h1 class="title">{{ title }}</h1>
    </div>

    <p class="store_message">{{ $store.state.message }}</p>
    <div class="link">
      <p>{{ $store.state.counter }}</p>
      <button class="button--green" v-on:click="$store.dispatch('doit')">
        <!-- <a v-on:click.stop="$store.commit('reset')">乱数生成</a> -->
        <a>乱数生成</a>
      </button>
    </div>

    <br />
    <p>count_action/index2.vueのコンテンツ ここまで</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "count_action/Index2",
      message: "this is count_action/Index2's message...",
    };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>