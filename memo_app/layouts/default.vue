<template>
  <div class="content">
    <div class="content-wrapper">
      <!-- <div class="row"> -->
      <div>
        <div class="col-xs-4">
          <ul>
            <!-- <li><router-link to="/">TOP ページヘ</router-link></li> -->
            <!-- <li><router-link to="/memo">Memo ページヘ</router-link></li> -->
            <li><a href="/">TOP ページヘ</a></li>
            <li><a href="/memo">Memo ページヘ</a></li>
          </ul>
        </div>
        <div class="col-xs-8">
          <Nuxt />
        </div>
      </div>
    </div>
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
</style>
