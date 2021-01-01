file:///C:/app/pleiades/workspace/vue-chapter/index1.html

## Vue Cliのインストール
npm install -g @vue/cli

## Vue cli-service-globalのインストール
npm install -g @vue/cli-service-global

## プロトタイプの実行
適用な場所にvueファイルを作成し、その階層までコマンドプロンプトで移動して以下のコマンドを実行
vue serve

## Vue Cliでプロジェクト作成
vue create プロジェクト名

## プロジェクトの実行
npm run serve

## プロジェクトをビルド(dist配下に出力)
npm run build

## Vue CliをGUIで実行
vue ui


## Nuxt.jsのプロジェクトを作成
npx create-nuxt-app プロジェクト名

## Nuxt.jsのリクエスト仕様
1. layouts/default.vue: これが画面全体の基本てきなレイアウト。これをベースにしてこの中に各ページのコンテンルが組み込まれる  
2. pages配下のパスがエンドポイントのパスになる
   ${host}/hoge => pages/hoge.vue


## TIPS

### CSS適用
  <style>
    .red {
      font-size: 20pt;
      font-weight: bold;
      font-style: normal;
      color: red;
    }
    .blue {
      font-size: 20pt;
      font-weight: plain;
      font-style: italic;
      color: blue;
    }
  </style>
  <div id="app">
    // app.data.classesをpタグのclass属性に適用
    <p v-bind:class="classes">{{ message }}</p>
  </div>
  <script>

    // styleのクラス名をJSONオブジェクトに設定
    var classObj = {
      red: true,
      blue: false
    };

    var data = {
      message: 'Hello Vue!',
      // classObjをclassesに設定
      classes: classObj
    };

    var app = new Vue({
      el: '#app',
      data: data
    });
  </script>

### 条件分岐

  --- HTML ---
  <p v-if="flg">True</p>
  <p v-else>False</p>

  templateは画面に表示されない
  <template v-if="flg">
    <p>True</p>
  </template>
  <template v-else>
    <p>False</p>
  </template>

### 繰り返し

  --- HTML ---
  <table>
    <tr v-for="(item, index) in items">
      <td>{{ index }}</td>
      <td>{{ item.name }}</td>
    </tr>
  </table>


### Component編

  --- HTML ---
  <div id="app">
    <hello name="Taro" />
  </div>

  --- JS ---
  Vue.component('hello', {
    props: [ 'name' ],
    template: '<p class="hello-class">Hello, {{ name }}</p>'
  });

  // 必ずVueオブジェクトを作る
  var app = new Vue({
    el: '#app'
  });

  # v-bind

  --- HTML ---
  <div id="app">
    <hello v-for="item in items" v-bind:name="item" />
  </div>

  --- JS ---
  // Component作成
  var hello = Vue.component('hello',
    {
      props: [ 'name' ],
      template: '<p class="hello-class">Hello, {{ name }}!!</p>'
    }
  );

  // Vueオブジェクト作成
  var app = new Vue({
    el: '#app',
    data: {
      items: ['Taro', 'Yuta', 'Hanako', 'Yui', 'Ichiro']
    }
  });

  # v-model

  --- HTML ---
  <div id="app">
    <div>
      <hello v-bind:name="hoge" />
    </div>
    <div>
      <input type="text" v-model="hoge">
    </div>
  </div>

  --- JS ---
  // Component作成
  var hello = Vue.component('hello',
    {
      // ↓でv-bind:XXX、{{ XXX }} を有効にする
      props: [ 'name' ],
      template: '<p class="hello-class">Hello, {{ name }}!!</p>'
    }
  );

  // Vueオブジェクト作成
  var app = new Vue({
    el: '#app',
    data: {
      // ここのhogeにv-modelのvalueがバインドされる
      hoge: "no name"
    }
  });

  // inputタグの値を変更
  //  → v-modelが変数hogeに入力値へ変更
  //   → v-bind:name="hoge" に入力値を変更
  //    → helloコンポーネントの「props」に入力値を変更
  //     → helloコンポーネントの「template」の{{ name }} の値を入力値に変更

  # v-on
  

### プロジェクト開発

  main.jsではApp.vueを読み込んで、これをVueでレンダリングし表示している.  
  なので、App.vueでおこなっていることが実質的に画面の表示をおこなっている ということになる


