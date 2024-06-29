import { createAction, props } from "@ngrx/store";
import { Post } from "../../models/posts.model";

export const ADD_POST_ACTION = '[post page] add post';
export const INCREMENT = '[post page] increment post';
export const DECREMENT = '[post page] decrement post';
export const RESET = '[post page] reset post';

export const addPost = createAction(ADD_POST_ACTION,props<{post:Post}>());

export const increment = createAction(INCREMENT,props<{post:Post}>());
export const decrement = createAction(DECREMENT,props<{post:Post}>());
export const reset = createAction(RESET,props<{post:Post}>());