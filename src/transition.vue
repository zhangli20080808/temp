<template>
  <div>
    <button v-on:click="show =!show">show/hide text</button>
    <!--谁要做动画，我们就把谁框起来-->
    <transition name="fade1">
      <p v-if="show">hello world</p>
    </transition>

  </div>
</template>

<!--commonjs的形式导入-->
<script>
  export default{
      name:'demo',
      data(){
          return{
              show:true
          }
      }
  }
</script>

<!--scoped我这个样式表只作用于.vue的文件，不加是全局的-->
<style scoped>
  .fade-enter-active，.fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter，.fade-leave-active{
    opacity: 0;
  }

</style>


//vue  过度动画    路由动画
