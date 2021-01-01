<template>
  <div class="container">
    　　
    <p>count_action/index.vueのコンテンツ ここから</p>

    <div>
      <Logo />
      <h1 class="title">{{ title }}</h1>
    </div>

    <p class="store_message">{{ $store.state.message }}</p>
    <div>
      <p>{{ $store.state.counter }}</p>
      <div class="inline-pos">
        <button class="button--green" v-on:click="$store.commit('count')">
          <a>{{ $store.state.countup_message }}</a>
        </button>
        <button class="button--green" v-on:click="$store.commit('reset')">リセット</button>
        <button class="button--green" v-on:click="$store.commit('replace', 1)">1を設定</button>
      </div>
    </div>

    <p>count_action/index.vueのコンテンツ ここまで</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "count_action/Index",
      message: "this is count_action/Index's message...",
      replace_value: 0,
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