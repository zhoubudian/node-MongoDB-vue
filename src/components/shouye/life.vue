<template>
  <div class="m-life">
    <el-row>
      <el-col :span="14">
        <slider/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"/>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt>
          </h4>
          <p class="m-life-login-name">Hi！你好</p>
          <div v-if="!user">
            <p>
              <el-button round size="medium">注册</el-button>
            </p>
            <p>
              <el-button round size="medium">立即登录</el-button>
            </p>
          </div>
        <div v-else>{{user}}</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"/>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"/>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
          <p>美团APP手机版</p>
          <h4>
            <span class="red">1元起</span>
            <em class="gary">吃喝玩乐</em>
          </h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from "./slider.vue";
import MyMenu from "./menu.vue";
export default {
  components: {
    Slider,
    MyMenu
  },
  data() {
    return {
      user: ""
    };
  },
  mounted() {
    console.log(this.$store.state.username);
    this.user = this.$store.state.username;
  }
};
</script>


<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>
