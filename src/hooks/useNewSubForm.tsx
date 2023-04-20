import { useReducer } from "react"
import { Sub } from "../types"

interface FromState {
    inputValues: Sub
}

type FormReducerAction = {
    type: "change_value"
    payload:{
        inputName: string
        inputValue: string
    }
} | {
    type: "clear"
}| {
    type: "change_experience"; 
    payload: {
        experience: number;
    };
};

const INITIAL_STATE = {
    nick:"",
     subMonths: 0,
     avatar:"",
    description:"",
    money:0,
    experience:0,
}

const formReducer = (state: FromState["inputValues"], action: FormReducerAction) => {
    switch(action.type){
        case "change_value":
            const {inputName, inputValue} = action.payload
            return{
                ... state,
                [inputName]: inputValue
    
            }
        case "change_experience":
            const { experience } = action.payload;
            return {
                ...state,
                experience: experience,
            }
        case "clear":
            return INITIAL_STATE
        default:
            return state
    }
}

const useNewSubForm =() =>{
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm