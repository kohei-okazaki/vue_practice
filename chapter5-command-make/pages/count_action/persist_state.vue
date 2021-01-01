<template>
  <div class="container">
    <p>count_action/persist_state.vueのコンテンツ ここから</p>
    <div>
      <Logo />
      <h1 class="title">{{ title }}</h1>
    </div>
    
    <div>
      <p>{{ $store.state.counter }}</p>
      <div class="link" v-on:click="$store.commit('doit')">
        <a v-on:click.stop="$store.commit('reset')">
          Clicked: {{ $store.state.counter }}
        </a>
      </div>
    </div>
    <p>count_action/persist_state.vueのコンテンツ ここまで</p>
  </div>
</template>

<script>

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