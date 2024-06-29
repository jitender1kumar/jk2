import { createAction, props } from "@ngrx/store";
import { Payfee } from "../model/payfee.model";

export const STUDENT_ADDMISSION = '[student page] addmission student';


export const studentAddmission = createAction(STUDENT_ADDMISSION,props<{payf:Payfee}>());
