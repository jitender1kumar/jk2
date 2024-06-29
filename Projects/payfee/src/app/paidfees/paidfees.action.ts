import { createAction, props } from "@ngrx/store";
import { Paidtutionfees } from "../model/paidfees.model";

export const STUDENT_TUITIONFEE = '[student page] tution fee';


export const studenttutionfee = createAction(STUDENT_TUITIONFEE,props<{paidf:Paidtutionfees}>());