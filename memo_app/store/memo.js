export const state = () => ({
  // メモ情報のEntityの配列
  memo: [],
  // 現在表示中のページ
  page: 0
});

export const mutations = {

  insert: function (state, obj) {

    let d = new Date();
    let fmt_date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() +
      ' ' + d.getHours() + ':' + d.getDate() + ':' + d.getMinutes();

    state.memo.unshift({
      title: obj.title,
      content: obj.content,
      created: fmt_date
    });
  },

  set_page: function (state, p) {
    state.page = p;
  },

  remove: function (state, obj) {

    var num = 0;
    for (var i = 0; i < state.memo.length; i++) {

      const memo_obj = state.memo[i];

      if (memo_obj.title == obj.title &&
        memo_obj.content == obj.content &&
        memo_obj.created == obj.created) {

        alert('remove it! --' + memo_obj.title);

        // メモを削除
        state.memo.splice(i, 1);
        return;
      }

    }
  }
};
