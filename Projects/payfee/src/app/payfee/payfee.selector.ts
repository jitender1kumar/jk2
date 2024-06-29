


import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PayfeeState } from "./payfee.state";

const getPayfeeState = createFeatureSelector<PayfeeState>('payf');

export const getPayfee = createSelector(getPayfeeState,state=>{
    return state.payf;
});


