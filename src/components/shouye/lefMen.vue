<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5"><emenu></emenu></el-col>
      <el-col :span="19"><life></life></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <artistic></artistic>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Emenu from './menu.vue'
import Life from './life.vue'
import Artistic from './artistic.vue'

export default {
  components: {
    Emenu,
    Life,
    Artistic
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss"
</style>
