import Vue from 'vue'
import VueRouter from 'vue-router'
//先把路由导入进来
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/'},
    //：绑定的意思  我们绑定了一个aaa
    {path: '/params/:aaa/:bbb'},
    {path: '/params-regex/:id(\\d+)'}
  ]
})
new Vue({
  router,
  template: `
    <div>
    <h1>hello good morning</h1>
    <ul>
    <li><router-link to="/">/</router-link></li>
    <li><router-link to="/params/111/222">/params/111/222</router-link></li>
    <li><router-link to="/params-regex/222">/params-regex/222</router-link></li>
    <p>Show</p>
    <pre><code>
        {{$route.params.aaa}}
        {{ JSON.stringify($route,null,2)}}
    </code></pre>
    </ul>
    </div> 
`
}).$mount('#app');

//我们要通过 url参数的形式  给路由传递  111  222 我们的模版要获取到这些穿过来的值
