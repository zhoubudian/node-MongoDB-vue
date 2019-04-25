<template>
  <div id="all">
    <!-- <article>
    </article> -->
    <section>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="200px"
        class="demo-ruleForm"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <!-- <el-form-item label="手机号" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item> -->
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input v-model="ruleForm.cpwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">同意以下协议并注册</el-button>
          <!-- <div class="error">{{error}}</div> -->
        </el-form-item>
        <el-form-item>
          <a href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "",
      ruleForm: {
        name: "",
        pwd: "",
        cpwd: "",
      },
      rules: {
        name: [
          {
            required: true,
            type: "string",
            message: "请输入昵称",
            trigger: "blur"
          }
        ],
       
        pwd: [
          {
            required: true,
            message: "创建密码",
            trigger: "blur"
          }
        ],
        cpwd: [
          {
            required: true,
            message: "确认密码",
            trigger: "blur"
          },{
              validator:(rule,value,callback)=>{
                    if(value === ''){
                        callback(new Error('请再次输入密码'));
                    }else if(value !== this.ruleForm.pwd){
                        callback(new Error('输入密码不一样'));
                    }else{
                        callback();
                    }
              },
              trigger:'blur'
          }
        ],
      }
    };
  },
  methods:{
      register(){
        let params = {
          name:this.ruleForm.name,
          password:this.ruleForm.pwd
        }
        this.$axios.post('/api/user/register',params).then(res=>{
          console.log(res);
          if(res.data.status == 1000){
            this.$router.push('/Login');
          }else{
            alert(res.data.message);
          }
          
        })

      }
  }
};
</script>

<style>
@import "./../../assets/css/regLog/register.css";
</style>
