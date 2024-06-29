import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState, PostsStateQty } from "./posts.state";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState,state=>{
    return state.posts;
});

const getPostsStateQty = createFeatureSelector<PostsStateQty>('qty');
export const getQty = createSelector(getPostsStateQty,state=>{
    return state.qty;
});
