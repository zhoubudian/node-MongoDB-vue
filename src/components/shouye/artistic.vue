<template>
  <section class="m-istyle">
    <div id="haveStyle">
      <div class="styleHeader">有格调</div>
      <div class="details">
          <dl v-for="(item,index) in good" :key="index" @click="gwc(item)">
            <dt>
              <img :src="item.photo" alt>
            </dt>
            <dd>{{item.name}}</dd>
            <dd>
              ¥
              <b>{{item.price}}</b>/人均
              <span>{{item.coordinate}}</span>
            </dd>
          </dl>
      </div>
    </div>
    <div id="catMovie">
      <div class="movieHeader">猫眼电影</div>
      <div class="movieList">
          <dl v-for="(item,index) in movie" :key="index">
            <dt>
              <img :src="item.photo" alt>
            </dt>
            <dd>
              <ul>
                <li>
                  观众评
                  <span>{{item.film}}</span>
                </li>
                <li>
                  {{item.name}}
                  <span>购票</span>
                </li>
              </ul>
            </dd>
          </dl>
      </div>
    </div>
    <div id="youLike">
      <div class="likeHeader">猜你喜欢</div>
      <div class="likeList">
          <dl v-for="(item,index) in groom" :key="index" @click="gwc(item)">
            <dt>
              <img :src="item.photo" alt>
            </dt>
            <dd>{{item.name}}</dd>
            <dd>
              <el-rate v-model="val[index]" disabled text-color="#ff9900" void-color="#C3C3C3"></el-rate>
              <span>{{item.yelp}}个评价</span>
            </dd>
            <dd>{{item.place}}</dd>
            <dd>
              ¥
              <b>{{item.price}}</b>起
            </dd>
          </dl>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      good: [],
      movie: [],
      val: [],
      groom: []
    };
  },
  methods:{
    gwc(item){
        this.$router.push({
          name:'Gwuc',
          params:{
            details:item
          }
        });
    }
  },
  mounted() {
    this.$axios.get("/api/goods").then(res => {
      this.good = res.data.data;
    });
    this.$axios.get("/api/movies").then(res => {
      this.movie = res.data.data;
    });
    this.$axios.get("/api/grooms").then(res => {
      this.groom = res.data.data;
      for (let i = 0; i < this.groom.length; i++) {
        this.val.push(this.groom[i].film);
      }
    });
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
.el-rate {
  float: left;
}
</style>
