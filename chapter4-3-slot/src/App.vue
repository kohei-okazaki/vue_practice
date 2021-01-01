<template>
  <div id="app">
    <SlotModule title="SLOT">
      <!-- ただのスロット -->
      <p class="inner">*** this is default text ***</p>
    </SlotModule>

    <NamedSlotModule title="NAMED_SLOT">
      <!-- 名前付きスロット -->
      <p class="etc">Begin!</p>
      <p slot="a" class="inner">*** this is First text ***</p>
      <p class="etc">Middle!</p>
      <p slot="b" class="inner">*** this is Second text ***</p>
      <p class="etc">End!</p>
      <p slot="c" class="inner">*** this is Third text ***</p>
    </NamedSlotModule>

    <SetNamedSlotModule title="SET_NAMED_SLOT">
      <li slot="slotlist" v-for="obj in slot_object_list" v-bind:key="obj.name">
        <!-- 名前付きスロットに値を動的に設定 -->
        {{ obj.name }} ({{ obj.mail }})
      </li>
    </SetNamedSlotModule>
  </div>
</template>

<script>
import SlotModule from "./components/SlotModule.vue";
import NamedSlotModule from "./components/NamedSlotModule.vue";
import SetNamedSlotModule from "./components/SetNamedSlotModule.vue";

export default {
  name: "App",
  components: {
    SlotModule,
    NamedSlotModule,
    SetNamedSlotModule
  },
  data: function() {
    return {
      slot_object_list: [
        {
          name: 'Taro',
          mail: 'test1@gmail.com'
        },
        {
          name: 'Kota',
          mail: 'test2@gmail.com'
        },
        {
          name: 'Yuto',
          mail: 'test3@gmail.com'
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
