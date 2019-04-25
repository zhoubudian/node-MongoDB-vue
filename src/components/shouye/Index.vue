<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <my-header/>
    </el-header>
    <el-main>
      <life-menu/>
    </el-main>
    <el-footer height="100%">
      <my-footer/>
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from "@/components/public/header/index.vue";
import MyFooter from "@/components/public/footer/index.vue";
import LifeMenu from './lefMen.vue'

export default {
  components:{
    MyHeader,
    MyFooter,
    LifeMenu,
  }
};
</script>

<style lang="sass">

</style>
