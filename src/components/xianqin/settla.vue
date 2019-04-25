<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <my-header/>
    </el-header>
    <el-main>
      <div id="all">
        <p class="title">结算</p>
        <ul class="goodsList" v-if="list.length!=0">
          <li v-for="(item,index) in list" :key="index">
            <dl>
              <dt>
                <img :src="item.photo" alt>
              </dt>
              <dd>
                <p>{{item.name}}</p>
                <p>
                  ¥
                  <b>{{item.price}}</b>
                </p>
              </dd>
              <dd>
                <el-button type="danger" icon="el-icon-delete" circle @click="del(item.name)"></el-button>
              </dd>
            </dl>
          </li>
        </ul>
        <p v-else class="no">购物车还没有商品,快去选择商品吧</p>
        <div class="total">
          <el-button type="success" plain @click="js" >结算</el-button>
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
  data() {
    return {
      list: [],
      count: 0,
    };
  },
  methods: {
    del(na){
      let param = {
        name:na
      }
      this.$axios.post('/api/gwcs/delete',param).then(res=>{
        console.log(res);
        /* this.list */
        this.xh(res.data.data);
      })
    },
    xh(list){
      this.list = [];
      for (let i = 0; i < list.length; i++) {
        if (list[i].customer == this.$store.state.username) {
          this.list.push(list[i]);
        }
      }
      return this.list
    },
    js(){
      let param = {
        customer:this.$store.state.username
      };
      this.$axios.post('/api/gwcs/delall',param).then(res=>{
        console.log(res);
        this.open();
        this.xh(res.data.data);
        
      })
    },
    open() {
        this.$alert('结算成功，去看看其他商品吧', '结算', {
          confirmButtonText: '确定',
          callback: action => {
            /* this.$message({
              type: 'info',
              message: `action: ${ action }`
            }); */
          }
        });
    }
  },
  mounted() {
    this.$axios.get("/api/gwcs/all").then(res => {
      this.xh(res.data.data);
      /* let zlist = res.data.data;
      for (let i = 0; i < zlist.length; i++) {
        if (zlist[i].customer == this.$store.state.username) {
          this.list.push(zlist[i]);
        }
      } */
    });
    console.log(this.list);
  },
  computed: {
    con(){
      for (let j = 0; j < this.list.length; j++) {
          
        this.count += parseInt(this.list[j].price);
      }
      console.log(this.count);
      return this.count
    },
    
  }
};
</script>

<style lang="sass">
@import "@/assets/css/index/settla.scss";
</style>
