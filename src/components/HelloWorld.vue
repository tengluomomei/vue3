<template>
  <h1>hello组件</h1>
  <p>{{ msg }}</p>
  <p>{{ count }}</p>
  <button @click="addFun">+1</button>
  <button @click="subFun">-1</button>
</template>

<script setup>
  import { ref } from 'vue'
  import useCount from '../hooks/useCount'

  const {count, addFun, subFun } = useCount()

  defineProps({
    msg: String,
  })

  // const count = ref(0)
  // const addFun = ()=>{
  //   count.value++
  // }
  // const subFun = ()=>{
  //   count.value--
  // }
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
