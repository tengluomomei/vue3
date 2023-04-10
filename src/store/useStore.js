import { defineStore } from 'pinia'
import axios from 'axios'

const useStore = defineStore('ncode',{
    state: ()=>{
        return {
            num: 100,
            listData: []
        }
    },
    getters:{

    },
    actions:{
        addFun(step){
            this.num += step
        },
        async getList(params){
            let res = await axios({
                url: 'api/v1/topics',
                method: 'Get',
                params
            })
            this.listData = res.data.data
        }
    }
})

export default useStore