import { defineStore } from "pinia";

export const useSelectionStore = defineStore('selection',{
    
    state : () => {
        return{
            counter : 0,
            playerSelection : undefined,
            computerSelection : undefined,

        }
    },
    actions : {

    },
    getters : {
        
    }
})