<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item,idx) in menu" :key="idx" @mouseenter="enter">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item,idx) in curdetail.child">
        <h4 :key="idx">{{item.title}}</h4>
        <span v-for="v in item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
      menu: []
    };
  },
  computed:{
    curdetail(){
        return this.menu.filter((item) => item.type === this.kind)[0]
    }
  },
  methods:{
      mouseleave(){
          let self = this;
          self._timer = setTimeout(function(){
            self.kind = ''
          },150)
      },
      enter(e){
          this.kind = e.target.querySelector('i').className;
      },
      sover(){
        clearTimeout(this._timer);
      },
      sout(){
        this.kind = ''
      },
  },
  mounted(){
    this.$axios.get('/api/menus').then(res=>{
      console.log(res);
      this.menu = res.data.data[0].menu
    })
  }
};
</script>

<style lang = "css">
</style>
