<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="do_A_Action">{{ a_btn }}</button>
    <br><br>
    <button @click="do_B_Action">{{ b_btn }}</button>

    <br><br>

    <transition name="transitA">
      <p v-if="a_flg" class="trans">Transition!</p>
    </transition>

    <transition name="transitB">
      <p v-if="b_flg" class="trans">Transition!</p>
    </transition>
    
    <hr>
  </div>
</template>

<script>
export default {
  name: 'BaseTransform',
  props: {
    title: String
  },
  data: function() {
    return {
      message: 'Transition Sample!',
      a_flg: true,
      a_btn: 'A Show / Hide',

      b_flg: true,
      b_btn: 'B Show / Hide'
    };
  },
  methods: {
    do_A_Action: function() {
      this.a_flg = !this.a_flg;
    },
    do_B_Action: function() {
      this.b_flg = !this.b_flg;
    },
  }
}
</script>

<style scoped>
.trans {
  width: 150px;
  background-color: #ddf;
  padding: 10px;
  font-size: 20pt;
}

.transitA-enter-active {
  transition: opacity 1s;
}
.transitA-enter {
  opacity: 0;
}
.transitA-enter-to {
  opacity: 1;
}
.transitA-leave-active {
  transition: opacity 1.0s;
}
.transitA-leave {
  opacity: 1;
}
.transitA-leave-to {
  opacity: 0;
}

/* trasnform処理 */
.transitA-enter, 
.transitA-leave-to {
  transform: translateX(200px) translateY(-200px);
  opacity: 0.1;
}



.transitB-enter-active {
  transition: opacity 1s;
}
.transitB-enter {
  opacity: 0;
}
.transitB-enter-to {
  opacity: 1;
}
.transitB-leave-active {
  transition: opacity 1.0s;
}
.transitB-leave {
  opacity: 1;
}
.transitB-leave-to {
  opacity: 0;
}

/* trasnform処理 */
.transitB-enter, 
.transitB-leave-to {
  transform: scale(5.0);
  opacity: 0.1;
}
</style>
