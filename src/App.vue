<template>
  <!-- <router-link to="/dashboard">首页</router-link> | 
  <router-link to="/good/list">商品列表</router-link> | 
  <router-link to="/order/list">订单列表</router-link> | -->

  <router-view></router-view>
  <!-- <p>{{ num }}</p>
  <button @click="addFun">+1</button> -->
</template>

<!-- <script>
  // import HelloWorld from './components/HelloWorld.vue'
  // 选项式API
  export default{
    data(){
      return{
        num: 0
      }
    },
    methods:{
      addFun(){
        this.num++
      }
    }
  }
</script> -->

<!-- <script>
  import {ref} from 'vue'
  export default{
    setup(){
        const num = ref(0)
        console.log(num.value)

      const addFun = ()=>{
        num.value++
      }

      return {
        num,
        addFun
      }
    }
  }
</script> -->

<script setup>
  import {ref} from 'vue'
  import HelloWorld from './components/HelloWorld.vue'

  // hooks
  import useCount from './hooks/useCount'
  const {count, addFun, subFun } = useCount()

  // const num = ref(0)
  // console.log(num.value)

  // const addFun = ()=>{
  //   num.value++
  // }
</script>


<style>
html,body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app{
  width: 100%;
  height: 100%;
  padding: 0;
}
.el-container{
  width: 100%;
  height: 100%; 
}
.el-aside{
  background: #ccc;
}

.el-header{
  background: #c6e2ff;
}

</style>
