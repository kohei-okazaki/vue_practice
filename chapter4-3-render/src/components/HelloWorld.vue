

<script>
// <template>なしで書き方
// export default {
//   name: 'HelloWorld',
//   render: function(h) {
//     return h('div', {
//     },
//     [
//       h('h1', 'Render'),
//       h('p', 'This is render sample.')
//     ]);
//   }
// }

// JSXでtemplateの書き方
export default {
  name: 'HelloWorld',
  render: function(h) {
    console.log(h);
    return (
      <div>
        <h1>JSX</h1>
        <p>This is JSX Message</p>
      </div>
    );
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
