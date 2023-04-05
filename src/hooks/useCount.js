
import { ref } from 'vue'

function useCount(){
    const count = ref(0)
    const addFun = ()=>{
      count.value++
    }
    const subFun = ()=>{
      count.value--
    }

    return {
        count,
        addFun,
        subFun  
    }
}
export default useCount