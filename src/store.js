/**
 * Created by liliwa on 17/3/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//
// 应用级的状态集中放在store中     state我们把他叫做访问状态对象 可以理解都是一些常量啊 数字不变的 我们
//通过计算去改变这些数字
// 改变状态的方式是提交mutations，这是个同步的事物   整个的一个方法对象 就是触发的一些状态  访问触发状态
// 异步逻辑应该封装在action中。
//我们定义了一个静态的常量
const state ={
  count:44
};
//我们这里定义一个方法
const mutations ={
  //赵大这个state
  //我们这个地方建议n是一个对象的形式
  jia(state,n){
    state.count += n.a
  },
  jian(state){
    state.count --
  }
};

const getters = {
  //我们要处理谁,建议不要用箭头函数 尖头函数中的this指向的是上一层
  count:function (state) {
    return state.count += 55;
  }
};

const actions = {
  //一个对象   代表了整个的store
  jiaplus(context){
    context.commit('jia',{a:1});
    setTimeout(() =>{
      context.commit('jian')
    },3000);
    //异步的一个状态
    console.log('我先呗执行了')
  },
  jianplus({commit}){
    commit('jian')
  }
};


//我们意模块组的方式去处理下
const moduleA  = {
  state,
  mutations,
  getters,
  actions
};

const moduleB  = {
  state:{countB:99}
};

export default new Vuex.Store({
  //我们在这个地方把他们引入进来
 modules:{
   a:moduleA,
   b:moduleB
 }
})
