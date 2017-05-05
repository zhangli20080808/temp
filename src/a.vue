<template>
  <div>
    <h2>hello Vuex</h2>
    <!--<p>{{$store.state.count}} &#45;&#45; {{count}}</p>-->
    <p>{{$store.state.a.count}}--{{count}}--{{$store.state.b.countB}}</p>
    <p>
      <button v-on:click="$store.commit('jia',{a:10})">+</button>
      <button v-on:click="jian">-</button>
    </p>
    <p>
      <button @click="jiaplus">+plus</button>
      <button @click="jianplus">-plus</button>
    </p>
  </div>
</template>
<!--我们来看看有什么方法能让他们相等-->

<script>
  import {mapState, mapMutations, mapGetters,mapActions} from 'vuex'
  export default{
    name: 'app',
    data(){
      return {
        count: 0
      }
      //我们在count＝0的时候  要去操作这个count  1.computed 2.生命周期
    },
//      computed:{
//          count(){
//              //我们这里的this指向store 在找到state 再找到count
//              return this.$store.state.count+1
//          }
//      }
//    另一种方式  我们需要一个引入
//      computed:mapState({
//          count:state=>state.count
//      })

//      computed:mapState([
//          //我们用数组的方式把他加载过来
//          "count"
//      ]),
    computed: {
//      ...mapState([
//        "count"
//      ])
          count(){
            return this.$store.state.a.count
          }
//      ...mapGetters([
//        "count"
//      ])
//    },
      //es5写法
//    computed:mapState({
//      count:function (state) {
//        return state.count +2;
//      }
//    })
    },
    methods: {
      ...mapMutations([
        'jia',
        'jian'
      ]),
      ...mapActions([
        'jiaplus'
      ]) ,
      ...mapActions({
          jianplus:'jianplus'
      })
    }
  }
</script>
