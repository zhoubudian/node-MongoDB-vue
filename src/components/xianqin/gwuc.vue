<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <my-header/>
    </el-header>
    <el-main>
        <div id="main">
            <div class="texts">
                <ul>
                    <li>{{list.name}}</li>
                    <li>
                        <p>地址: {{list.dizhi}}</p>
                        <p>电话: {{list.dh}}</p>
                    </li>
                    <li>
                        <p>团购价格</p>
                        <p>¥<b>{{list.price}}</b><span @click="add">加入购物车</span></p>
                    </li>
                </ul>
            </div>
            <div class="pho">
                <img :src="list.photo" alt="">
            </div>
        </div>
    </el-main>
    <el-footer height="100%">
      <my-footer/>
    </el-footer>
  </el-container>
</template>


<script>
import MyHeader from "@/components/public/header/index.vue";
import MyFooter from "@/components/public/footer/index.vue";
export default {
  components: {
    MyHeader,
    MyFooter
  },
  data(){
      return {
          list:[]
      }
  },
  methods:{
    add(){
      let params = {
        customer:this.$store.state.username,
        name:this.list.name,
        photo:this.list.photo,
        price:this.list.price
      }
      this.$axios.post('/api/gwcs/add',params).then(res=>{
        console.log(res);
        if(res.data.status == 1000){
            alert(res.data.message);
            this.$router.push('/Index');
        }else{
          alert(res.data.message);
        }
      })
    }
  },
  mounted() {
    console.log(this.$store.state.username);
    console.log(this.$route.params.details);
    this.list = this.$route.params.details;
  }
};
</script>

<style lang="sass">
@import "@/assets/css/index/gwc.scss";
</style>

