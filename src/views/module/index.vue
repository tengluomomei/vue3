<template>
    <h3>组件使用</h3>
    <ModuleList :msg="abc" :count="num" @myClick="onMyClick"></ModuleList>
</template>

<script setup>
    import { ref } from 'vue'
    import ModuleList from '@/components/ModuleList.vue';

    const abc = ref('我是module组件')

    const num = ref(100)

    const onMyClick = (payload)=>{
        num.value = payload
    }
</script>