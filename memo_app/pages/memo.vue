<template>
  <div class="container">
    <h1>Memo</h1>
    <table>
      <tr>
        <th>件名</th>
        <td class="input-group">
          <input
            type="text"
            name="title"
            class="title form-control"
            size="40"
            v-model="title"
            v-on:focus="set_flg"
          />
          <button class="btn btn-primary" v-on:click="find">検索</button>
        </td>
      </tr>

      <tr>
        <th>メモ内容</th>
        <td class="input-group">
          <textarea
            name="content"
            class="content form-control"
            col="50"
            rows="5"
            v-model="content">
          </textarea>
        </td>
      </tr>

      <tr>
        <th></th>
        <td>
          <button class="btn btn-primary" v-on:click="insert">登録</button>
          <transition name="del">
            <button class="btn btn-danger" v-if="set_flg != false" v-on:click="remove">削除</button>
          </transition>
        </td>
      </tr>
    </table>

    <hr />

    <ul class="list">
      <li v-for="item in page_items">
        <span v-on:click="select(item)">{{ item.title }} ({{ item.created }})</span>
      </li>
    </ul>

    <hr />

    <div class="nav">
      <span v-on:click="prev">&lt;prev</span> | <span v-on:click="next">next&gt;</span>
    </div>
  </div>
</template>

<script>
export default {

  data: function () {
    return {
      // in.メモ件名
      title: "",
      // in.メモ内容
      content: "",
      // 1ページあたりに表示するメモ件数
      num_per_page: 5,
      // 検索実行中を示すフラグ.　検索中ならばtrue,それ以外の場合false
      find_flg: false,
      // 項目を選択した状態かを示すフラグ.　選択状態ならばtrue,それ以外の場合false
      sel_flg: false,
    };
  },
  computed: {
    memo: function () {
      return this.$store.state.memo.memo;
    },
    page_items: function () {
      if (this.find_flg) {
        var arr = [];
        var data = this.$store.state.memo.memo;
        data.forEach(element => {
          console.log("保存データタイトル=" + element.title.toLowerCase() + ", 入力情報.タイトル=" + this.title.toLowerCase());
          if (element.title.toLowerCase().indexOf(this.title.toLowerCase()) >= 0) {
            console.log("検索結果に追加 -> " + element.title);
            arr.push(element);
          }
        });
        return arr;
      } else if (this.sel_flg != false) {
        return [this.sel_flg];
      } else {
        return this.$store.state.memo.memo.slice(
          this.num_per_page * this.$store.state.memo.page,
          this.num_per_page * (this.$store.state.memo.page + 1)
        );
      }
    },
    page: {
      get: function () {
        return this.$store.state.memo.page;
      },
      set: function (p) {
        var pg =
          p > ((this.$store.state.memo.memo.length - 1) / this.num_per_page)
            ? Math.ceil((this.$store.state.memo.memo.length - 1) / this.num_per_page) - 1
            : p;

        pg = pg < 0 ? 0 : pg;
        this.$store.commit("memo/set_page", pg);
      },
    },
  },
  methods: {
    set_flg: function () {
      if (this.find_flg || this.sel_flg != false) {
        this.find_flg = false;
        this.sel_flg = false;
        this.title = "";
        this.content = "";
      }
    },
    insert: function () {
      if (this.title == '') {
        alert("件名が未指定のため登録できません");
        return;
      } else if (this.content == '') {
        alert("メモ内容が未指定のため登録できません");
        return;
      }

      this.$store.commit("memo/insert", {
        title: this.title,
        content: this.content,
      });
      this.title = "";
      this.content = "";
    },
    select: function (item) {
      this.find_flg = false;
      this.sel_flg = item;
      this.title = item.title;
      this.content = item.content;
    },
    remove: function () {
      if (!this.sel_flg) {
        console.log("検索していないため、どのメモを消すか分からないので無処理");
        alert("メモが指定されていません");
        return;
      } else {
        this.$store.commit("memo/remove", this.sel_flg);
        this.set_flg();
      }
    },
    find: function () {
      this.sel_flg = false;
      this.find_flg = true;
    },
    next: function () {
      this.page++;
    },
    prev: function () {
      this.page--;
    },
  },
  created: function () {
    this.$store.commit("memo/set_page", 0);
  },
};
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
</style>
