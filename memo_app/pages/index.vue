<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">memo_app</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  padding: 5px 10px;
}
h1 {
  font-size: 60pt;
  color: #345980;
}
p {
  padding-top: 5px;
  font-size: 20pt;
}
div {
  font-size: 14pt;
}
pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
}
input textarea {
  font-size: 14pt;
  margin: 5px;
}
button {
  font-size: 14pt;
  padding: 1px 10px;
  margin: 5px;
}
hr {
  border-style: none;
  border-top: solid;
  border-width: 5px;
  border-color: #def;
  margin: 20px 0px 10px 0px;
}
li {
  font-size: 14pt;
  height: 32px;
}
th {
  background-color: #345980;
  color: white;
}
td {
  background-color: aliceblue;
  color: #345980;
  padding: 5px;
}
.nav {
  padding: 0px 10px;
  cursor: pointer;
}
.list {
  cursor: pointer;
}
.del-enter-active, .del-leave-active {
  transition: opacity .5s;
}
.del-enter, .del-leave-to {
  opacity: 0;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
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
