<template>
  <div>
    <p>default.vueのコンテンツ ここから</p>
    <ul>
      <li><router-link to="/">TOP ページヘ</router-link></li>
      <li><router-link to="/other">その他 ページヘ</router-link></li>
      <li><router-link to="/login">ログイン ページヘ</router-link></li>
      <li><router-link to="/loginvalidate">ログイン(妥当性チェックありの) ページヘ</router-link></li>
      <li><router-link to="/count_action/">count_action ページヘ</router-link></li>
      <li><router-link to="/count_action/index2">count_action/index2 ページヘ</router-link></li>
      <li><router-link to="/count_action/persist_state">count_action/persist_state ページヘ</router-link></li>
    </ul>
    <Nuxt />
    <p>default.vueのコンテンツ ここまで</p>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.store_message {
  color: rebeccapurple;
  margin: 5px;
  padding: 5px;
}

.links {
  padding-top: 15px;
}
</style>
