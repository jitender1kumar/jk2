import { createReducer, on } from "@ngrx/store";
import { initialState } from "./paidfees.state";
import { studenttutionfee } from "./paidfees.action";



const _paidfReducer = createReducer(initialState,on(studenttutionfee,(state, action)=>
    {
        let paidf = {...action.paidf};   
        return {
            ...state,
           paidf:[...state.paidf,paidf],
    
        };
    }),
    )
   
    
    
    export function paidfReducer(state:any,action:any)
    {
        return _paidfReducer(state,action);
    }