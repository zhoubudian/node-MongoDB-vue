<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="search" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"></el-input>
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,idx) in hotPlace" :key="idx">{{item}}</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,idx) in searchList" :key="idx">{{item}}</dd>
          </dl>
        </div>
        <p class="suggset">
          <a href="#">杭州动物园</a>
          <a href="#">杭州动物园</a>
          <a href="#">杭州动物园</a>
          <a href="#">杭州动物园</a>
          <a href="#">杭州动物园</a>
        </p>
        <ul class="nav">
          <li>
            <a class="takeout">美团外卖</a>
          </li>
          <li>
            <a class="movie">猫眼电影</a>
          </li>
          <li>
            <a class="hotel">美团酒店</a>
          </li>
          <li>
            <a class="apartment">民宿/公寓</a>
          </li>
          <li>
            <router-link to="/Settla" class="business">购物车</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund"></i>
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single"></i>
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue"></i>
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      search: "",
      isFocus: false,
      hotPlace:['火锅','火锅','火锅',],
      searchList:['烧烤','烧烤','烧烤',]
    };
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.search;
    },
    isSearchList: function() {
      return this.isFocus && this.search;
    }
  },
  methods:{
    focus(){
      this.isFocus = true;
    },
    blur(){
      let self = this;
      setTimeout(function(){
        self.isFocus = false;
      },200)
    },
    input(){
      console.log('input')
    },
  }
};
</script>


<style lang="scss">
</style>

