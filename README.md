# temp

> temp测试

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


首先 我们导入我们的路由  其次 声名这个路由
1.我们先来用js的方式去实现路由
2.子路有   单独的去做子路由里面的视图
3.如何通过路由来传递参数   到模版里面    还有就是通过我们的to来传递参数
  两个方法  name  因为first有子菜单,所以我们这里的配置是无效的
  比如说我们点击一个链接  把参数传到子的模版里
  当然,我们点击传参的时候,坑定是有一个绑定的属性的  这里我们绑定了to json的数据格式
   :to="{name:'Home-First-first',params:{id:123}}"
对应模版里面{{$route.params.id}}
4. 路由表的组件群
  点击first的话 我们下面的   模版单独的用组件的方式去定义
5.url传值     如果你需要一些动态的url
6.我们来看看如何路由引进vue的模版

7.钩子   获取客户端在做什么 向总部汇报信息的，根据这些来告诉你是否要去执行
8.编程式导航
9.vuex  
  新建一个控制中心文件  store.js
10 怎么去访问状态对象
11 怎么去触发状态对象
  动态的计算   我们的getter
12 action是异步状态    mutations是同步的  顾名思义  假死
13 module 模块组
 比如说我们声明了一个a，那么在调用的时候
 我们可以用一些其他的方式去代替模块组
