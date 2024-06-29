
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PaidfeeState } from "./paidfees.state";

const getPaidfeeState = createFeatureSelector<PaidfeeState>('paidf');

export const getPaidfee = createSelector(getPaidfeeState,state=>{
    return state.paidf;
});
