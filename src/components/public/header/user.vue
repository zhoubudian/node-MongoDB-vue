<template>
    <div class="m-user">
        <template v-if="user">
            欢迎您, <span class="username">{{user}}</span>
            [<a>退出</a>]
        </template>
         <template v-else>
            <a class="login">立即登录</a>
            <a class="register">注册</a>
         </template>
    </div>
</template>

<script>
export default {
   data(){
       return {
           user:''
       }
   },
   mounted(){
       
       /* console.log(this.$store.state.username); */
       this.user = this.$store.state.username;
   }
}
</script>

<style>

</style>
