<template>
  <h1>子组件</h1>
  <p>{{ msg }}</p>
  <p>{{ count }}</p>
  <button @click="emit('myClick', 1000)">+1</button>
  <button @click="addFun">+1</button>
</template>

<script setup>
  import { ref, defineProps, defineEmits } from 'vue'

  const emit = defineEmits(['myClick'])

  defineProps({
    // 第一种写法
    // msg: String,
    count: Number,
    msg:{
      type: String,
      default: ''
    }  
  })

  const addFun = ()=>{
    emit('myClick', 200000) 
  }
</script>