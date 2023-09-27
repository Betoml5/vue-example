<script >
import { ref } from "vue"
import { useStore } from "vuex";



export default {
  setup() {

    const store = useStore();



  },
  created() {
    this.$store.dispatch("autoLogin");
  },
}

</script>

<template >
  <Header v-show="isAuth" />
  <router-view></router-view>
</template>


