<template>
    <h3>订单列表</h3>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    
    const route = useRoute()
    console.log(route)

    // console.log(route.query)
    console.log(route.params)
</script>