import Vue from 'vue'
import VueRouter from 'vue-router'
//先把路由导入进来
Vue.use(VueRouter);

//构建我们的模版
 const first = {template:'<div>这是first的第一个页面</div>'}
 const second = {template:'<div>这是second的第一个页面</div>'}
 const home = {template:'<div>这是home的第一个页面</div>'}
 const hehe = {template:'<div>这是hehe的第一个页面</div>'}

//定义我们的路由
const router = new VueRouter({
  //我们使用的模式
  mode:'history',
  //base的参数：当前的可选路径
  base:__dirname,
  //我们以数组的方式存储路径,一定要注意,这个地方我们的路由一定要加一个s，开始写路由了
  routes:[
    {path: '/',components:{
        default:home,
        left:first,
        right:second
    }},
    //我们来处理一下子视图
    {path: '/first',components:{
      default:hehe,
      left:first,
      right:second
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
        </ol>
        <!--结束之后,我们规定他显示到哪里 class对渲染的结果做一些处理-->
        <router-view class="asdfj"></router-view>
        <router-view class="asdfj" name="left" style="width: 50%;height: 300px;float: left;background-color:#ff6600;"></router-view>
        <router-view class="asdfj" name="right" style="width: 50%;height: 300px;float: left;background-color:red;"></router-view>
    </div>
  `
//  最后选择要挂载的地方吧
}).$mount('#app');
