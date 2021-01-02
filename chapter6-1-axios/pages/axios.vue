<template>
  <div>
    <p>ここからaxiosのページです</p>

    <h1>{{ title }}</h1>

    <p>{{ message }}</p>

    <!-- <pre>{{ html_data }}</pre> -->
    <p>API通信結果={{ api_result }}</p>
    <button @click="exec_search">API通信実施</button>
    <table v-if="is_disp_table">
      <tr>
        <th>ユーザID</th>
        <th>メールアドレス</th>
        <th>削除フラグ</th>
        <th>パスワード有効期限</th>
        <th>備考</th>
        <th>APIキー</th>
        <th>ヘッダー利用フラグ</th>
        <th>フッター利用フラグ</th>
        <th>マスク利用フラグ</th>
        <th>囲み文字利用フラグ</th>
      </tr>
      <tr v-bind:key="account" v-for="account in account_list">
        <td>{{ account.seq_user_id }}</td>
        <td>{{ account.mail_address }}</td>
        <td>{{ account.delete_flag }}</td>
        <td>{{ account.password_expire }}</td>
        <td>{{ account.remarks }}</td>
        <td>{{ account.api_key }}</td>
        <td>{{ account.remarks }}</td>
        <td>{{ account.footer_flag }}</td>
        <td>{{ account.mask_flag }}</td>
        <td>{{ account.enclosure_char_flag }}</td>
      </tr>
    </table>

    <p>ここまでaxiosのページです</p>
  </div>
</template>
  
<script>
const axios = require("axios");

let url = "http://localhost:8082/api/root/accountlist";
// let url = "/README.md";
export default {
  data: function () {
    return {
      title: "Axios",
      message: "axios sample.",
      api_result: '',
      account_list: [],
      is_disp_table: false
    };
  },
  // component呼び出し時にAPIを叩く場合はget()関数をそのまま使う
  // asyncData: async function () {
  //   let result = await axios.get(url);
  //   console.log(result.data);
  //   return {
  //     html_data: result.data,
  //     account_list: result.data.account_list
  //   };
  // },

  // 画面操作時はmethodsに定義
  methods: {
    exec_search: function() {
      axios.get(url).then(result => {
        console.log(result.data);
        if (result.data.result == '0') {
          this.is_disp_table = true;
        }
        this.api_result = result.data.result;
        this.account_list = result.data.account_list;
      }).catch(error => {
        alert("API通信に失敗しました. URL=" + url);
        this.api_result = 1;
        this.account_list = [];
      });


    }
  }
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
  font-size: 9pt;
  background-color: #efefef;
  white-space: pre-wrap;
}
hr {
  margin: 10px 0px;
}
button {
  font-size: 14pt;
}
th{
  background-color: #efefef;
}
</style>