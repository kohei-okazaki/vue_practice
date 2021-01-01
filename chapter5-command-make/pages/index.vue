<template>
  <div class="container">
    <p>index.vueのコンテンツ ここから</p>
    <div>
      <Logo />
      <h1 class="title">{{ title }}</h1>
      <p>{{ message }}</p>
      <pre>{{ now }}</pre>

    </div>
    <p>index.vueのコンテンツ ここまで</p>
  </div>
</template>

<script>
export default {

  data: function() {
    return {
      title: 'Hello',
      message: 'this is index page\'s message...',
      now: 'wait...'
    };
  },
  created: function() {
    setInterval(() => {
      var d = new Date();
      this.now = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    }, 1000);
  }

}
</script>

<style>
.inline-pos {
  display: inline-block;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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
