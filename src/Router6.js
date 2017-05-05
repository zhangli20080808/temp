import Vue from 'vue'
import VueRouter from 'vue-router'
//先把路由导入进来
Vue.use(VueRouter);

//构建我们的模版
const first = {template:'<div>这是first的第一个页面</div>'}
const second = {template:'<div>这是second的第一个页面</div>'}
const home = {template:'<div>这是home的第一个页面</div>'}

//子路有模版
const firstFirst = {template:'<div>这是firstFirst的内容{{$route.params.id}}</div>'}
const firstSecond = {template:'<div>这是firstSecond的内容{{$route.params.id}}</div>'}


const asdf = {
  template:`
        <div class="asdf">
              <h2>组件</h2>
              <router-view class="asdf"></router-view>
        </div>
   `
};
//定义我们的路由
const router = new VueRouter({
  //我们使用的模式
  mode:'history',
  //base的参数：当前的可选路径
  base:__dirname,
  //我们以数组的方式存储路径,一定要注意,这个地方我们的路由一定要加一个s，开始写路由了
  routes:[
    {path: '/',name:'Home',component:home},
    //我们来处理一下子视图
    {path: '/first',component:asdf,
      children:[
        {path: '/',name:'Home-First',component:first},
        {path: 'first',name:'Home-First-first',component:firstFirst},
        {path: 'second',name:'Home-Second-second',component:firstSecond },
        {path:'third',redirect:'first'}
      ]
    },
    //我们点击gogo也能访问second
    {path: '/second',name:'Home-Second',component:second,alias:'/gogo'},
    {path: '/aaa/:id',component:firstFirst},
    {path: '/bbb/:id',redirect:'/aaa/:id'},
    {path:'/ccc/:id',redirect:xxxx=>{
        const { hash,query,params } = xxxx;
        if (params.id === '001'){
          return '/'
        }
    }}
  ]
});

new Vue({
  router,
  template:`
    <div id ='r'>
        <h1>导航</h1>
        <P>{{$route.name}}</P>
        <ol>
        <!--这个地方要用到一个新的标签  存放这种路由链接的 比如根目录 到哪里to-->
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/first">/first</router-link></li>
                <ol>
                    <li><router-link :to="{name:'Home-First-first',params:{id:123}}">first</router-link></li>
                    <li><router-link :to="{name:'Home-Second-second',params:{id:321}}">second</router-link></li>
                    <li><router-link to="third">third</router-link></li>
                </ol>
            <li><router-link to="/second">/second</router-link></li>
            <li><router-link to="/aaa/123">aaa</router-link></li>
            <li><router-link to="/bbb/456">bbb</router-link></li>
            <li><router-link to="/gogo">gogo</router-link></li>
            <li><router-link to="/ccc/001">ccc</router-link></li>
        </ol>
        <!--结束之后,我们规定他显示到哪里 class对渲染的结果做一些处理-->
        <router-view class="asdfj"></router-view>
    </div>
  `
//  最后选择要挂载的地方吧
}).$mount('#app');
