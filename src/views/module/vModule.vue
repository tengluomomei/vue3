<template>
    <h3>v-module的使用</h3>
    <ModuleDemo v-model:abc="lang"></ModuleDemo>
</template>

<script setup>
    import { ref} from 'vue'
    import ModuleDemo from '@/components/ModuleDemo.vue';

    const lang = ref('zh')


</script>