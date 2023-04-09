<template>
  <h1>子组件v-module</h1>
  <div class="lang">
      <span :class="{on: abc === item.value}" v-for="(item, index) in langData" :key="index" @click="changeLang(item)">{{ item.lable }}</span>
  </div>
</template>

<script setup>
  import { ref, defineProps, defineEmits, reactive} from 'vue'

  defineProps({
    abc: {
      type: String,
      default: 'zh'
    }
  })

  const emit = defineEmits(['update:abc'])

  const langData = reactive([
    {
      id: 1,
      value: 'zh',
      lable: '中文'
    },
    {
      id: 2,
      value: 'en',
      lable: '英文'
    },
    {
      id: 3,
      value: 'kr',
      lable: '韩文'
    }
  ])

  const changeLang = (item)=>{
    emit('update:abc', item.value)
  }



  
</script>

<style scoped>
.lang span{
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.lang span.on{
  color: red;
}
</style>>