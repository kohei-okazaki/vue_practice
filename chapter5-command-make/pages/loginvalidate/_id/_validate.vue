<template>
  <div class="container">
    <p>login_validate.vueのコンテンツ ここから</p>
    <div>
      <Logo />
      <h2 class="title">{{ title }}</h2>
      <br />
      <p v-html="message">no message.</p>
    </div>
    <p>login_validate.vueのコンテンツ ここまで</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "ログイン",
    };
  },
  validate({ params }) {
    if (params.id == undefined || params.validate == undefined) {
      // login/以下のパスの指定が不正の場合
      return false;
    }
    return true;
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
