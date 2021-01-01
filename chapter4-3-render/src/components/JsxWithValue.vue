<script>
// JSXでtemplateの書き方
export default {
  name: "JsxWithValue",
  data: function () {
    return {
      title: "JSX_WITH_VALUE",
      message: "これはdataに用意したメッセージです",
    };
  },
  render: function (h) {
    console.log(h);
    // dataプロパティから実際の値を取得
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.message}</p>
      </div>
    );
  },
};
</script>

<style scoped>
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
