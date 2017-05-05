import Vue from 'vue'
import VueRouter from 'vue-router'
//先把路由导入进来
Vue.use(VueRouter);

const Home= {
  template:`
    <div>
       <h2>home</h2>
       <p>this is home -- {{$route.query.a}}</p>
    </div>
    `
};
const parent= {
  template:`
    <div>
     <h2>parent</h2>
     <p>this is parent</p>
</div>
    `
};

const page404 = {
  template:`
    <div>
    <h2>404</h2>
</div>
    `
};
const test = {
  template:`
   <div>
   <h2>测试404是否能用</h2>
</div>
`
}

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:Home},
    {path:'/parent',component:parent},
    {path:'/test',component:test},
    {path:'*',component:page404}
  ]
});

new Vue({
  router,
  data(){
    return{
      aaa:'fade'
    }
  },
  template: `
    <div id="app">
    <button v-on:click="back">后退</button>
    <button v-on:click="go">前进</button>
    <button v-on:click="home">返回主页</button>
    <button v-on:click="query">query</button>
   
    <h1>this is transition</h1>
      <ul>
        <li>
          <router-link to="/">/</router-link>
        </li>
        <li><router-link to="/parent">/parent</router-link></li>
        <li><router-link to="/test">/test</router-link></li>
        <li><router-link to="/404">/404</router-link></li>
      </ul>
      <!--这里有一个out－in 也有一个in-out，你先下去，然后再上去-->
      <transition :name="aaa" mode="out-in">
      <router-view></router-view>
      </transition>
    <!--我们去监听一下路由-->
  
</div>
`,
  methods:{
    back:function () {
      router.go(-1)
    },
    go:function () {
      router.go(1)
    },
    home:function () {
      //其实是个数组
      // console.log(router);
      router.push('/')
    },
    query:function () {
      //我们这样传值是改变不了模版的
      router.push({path:'/',query:{a:1,b:2}})
    }
  },

  watch:{
    '$route' (to,from){
      // console.log(to);
      // console.log(from);
      if (from.path == '/parent'){
        this.aaa = 'fade1'
      }else{
        this.aaa= 'fade2'
      }
    }
  }
}).$mount('#app');
