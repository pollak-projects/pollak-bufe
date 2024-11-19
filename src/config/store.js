import { reactive } from "vue";

export const store = reactive({
    kosar: [{
        darab: 0,
    }]
})

export const store2 = reactive({
    kosar: [{
        darab: "",
    }],
    szoszok: []
})
export const storeExtra = reactive({
    kosarExtra: [],
})

export const storeszunet = reactive({
    elsoszunet: [{
        elsoszunet: 0,
    }]
})
