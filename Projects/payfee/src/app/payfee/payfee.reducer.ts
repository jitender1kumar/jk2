import { createReducer, on } from "@ngrx/store";
import { initialState } from "./payfee.state";
import { studentAddmission } from "./payfee.action";
import { state } from "@angular/animations";



const _payfReducer = createReducer(initialState, on(studentAddmission,(state, action)=>
    {
        let payf = {...action.payf};   
        return {
            ...state,
           payf:[...state.payf,payf],
    
        };
    }),
    )
   
    
    export function payfReducer(state:any,action:any)
    {
        return _payfReducer(state,action);
    }