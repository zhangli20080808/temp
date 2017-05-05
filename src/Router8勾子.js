import Vue from 'vue'
import VueRouter from 'vue-router'
//先把路由导入进来
Vue.use(VueRouter);

const Home= {
  template:`
    <div>
       <h2>home</h2>
       <p>this is home</p>
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
}

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:Home},
    {path:'/parent',component:parent,
      beforeEnter:(to,from,next) =>{
        console.log(to);
        console.log(from);
        next();//可以
        // next(false);

      }
    },
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
    <h1>this is transition</h1>
      <ul>
        <li>
          <router-link to="/">/</router-link>
        </li>
        <li><router-link to="/parent">/parent</router-link></li>
        <li><router-link to="/assdsfd">where not here</router-link></li>
      </ul>
      <!--这里有一个out－in 也有一个in-out，你先下去，然后再上去-->
      <transition :name="aaa" mode="out-in">
      <router-view></router-view>
      </transition>
    <!--我们去监听一下路由-->
  
</div>
`,
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
