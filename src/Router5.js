import Vue from 'vue'
import VueRouter from 'vue-router'
//先把路由导入进来
Vue.use(VueRouter);


const home = {template: '<div>这是home的第一个页面</div>'}

const users = {
  template: `
    <div>
    <h2>Users</h2>
    <router-view></router-view>
</div> 
    `
};

const user = {
  template: `
    <div>
    <!--注意这里不能是router-view了-->
    {{$route.params.username}}－
    {{$route.query.aaa}}
</div> 
    `
};
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', name: 'home', component: home},
    //：绑定的意思  我们绑定了一个aaa
    {
      path: '/users', component: users,
      children: [
        {path: ':username', name: 'user', component: user}
      ]
    }
  ]
})
new Vue({
  router,
  template: `
    <div id ='r'>
        <h1>导航</h1>
        <ol>
        <!--这个地方要用到一个新的标签  存放这种路由链接的 比如根目录 到哪里to-->
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/first">/first</router-link></li>
            <ol><li>
            <!--这个地方的wosss穿过去是要用params获取的-->
                <router-link :to="{path:'/users/wossssss',query:{aaa:'bbb'}}">wos</router-link>
                </li>
                <li>
                     <router-link append to="about">append</router-link>
                </li>
           </ol>
           <!--相当于加了一个li-->
            <!--<router-link tag="li" to="about">link</router-link>-->
        </ol>
        <!--结束之后,我们规定他显示到哪里 class对渲染的结果做一些处理-->
        <router-view></router-view>
    </div>
  `
//  最后选择要挂载的地方吧
}).$mount('#app');
