import {reactive, readonly} from "vue";


const state = reactive({
    dev:true,
    appData:{
        companyName:'Grand Eagle',
        companyEmail:'',
        companyNumber:''
    }
})


export  default {
    state:readonly(state)
}
