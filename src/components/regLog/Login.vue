<style>
@import "./../../assets/css/regLog/login.css";
</style>

<template>
  <div id="all">
    <div class="logo">
      <router-link to="/">
        <img src alt>
      </router-link>
    </div>
    <div class="main">
      <div class="pho">
        <img src="http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt>
      </div>
      <div class="login">
        <p class="acclog">账号登录</p>
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
          size="small"
        >
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="formLabelAlign.region"></el-input>
          </el-form-item>
        </el-form>
        <div class="dibut">
           <el-button class="but" type="primary" plain size="medium" @click="login">登录</el-button>
        </div>
       
        <p class="acclog">
          还没有账号吗？
          <router-link to='/Register'>注册一个吧</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  },
  methods:{
    login(){
      let params = {
        name:this.formLabelAlign.name,
        password:this.formLabelAlign.region
      }
      this.$axios.post('/api/user/login',params).then((res)=>{
        if(res.data.status == 1000){
          console.log(res);
          alert('登录成功');
          this.$router.push('/Index');
          this.$store.dispatch('actionsUserName',this.formLabelAlign.name);
        }else{
          alert(res.data.message);
        }
        
      })
    }
  }
};
</script>