import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// アロー関数で定義
// const createStore = () => {
//   return new Vuex.Store({
//     state: function () {
//       return {
//         message: 'This is store message'
//       };
//     }
//   });
// }

// 通常の関数定義
function createStore() {
  return new Vuex.Store({

    // state -> 様々なComponentで共通に呼びたい変数などを定義
    state: function () {
      return {
        message: 'This is store\'s message',
        counter: 0,
        countup_message: "カウントアップ!!!"
      };
    },
    mutations: {
      // mutations -> component側からstateの値を安全に変更するやり方
      count: function (state) {
        state.message = 'カウントアップ'
        state.counter++;
      },
      reset: function (state) {
        state.message = 'リセット'
        state.counter = 0;
      },
      replace: function (state, i) {
        state.counter = i;
        state.message = "replace now...";
      },
      say: function (state, msg) {
        state.message = msg;
      }
    },
    actions: {
      // actions -> ミューテーションを呼び出すための機能
      // <button  v-on:click="$store.dispatch('doit')">
      // ↑みたいな感じで押下時、doitメソッドが呼ばれる
      doit: function (context) {
        var n = Math.floor(Math.random() * 10);
        context.commit('replace', n);
        context.commit('say', 'add ' + n + '!!!');
      }
    },
    plugins: [
      createPersistedState()
    ]
  });
}

export default createStore
