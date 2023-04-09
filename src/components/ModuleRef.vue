<template>
  <h1>子组件ref</h1>
  子组件inject{{money }}
</template>

<script setup>
  import { ref, defineExpose, inject } from 'vue'

  const msg = ref(11).value

  const abc = ()=>{
    console.log(msg)
  }

  defineExpose({
    msg,
    abc
  })

  // 子孙使用父级提供的数据
  const money = inject('money')
  
</script>