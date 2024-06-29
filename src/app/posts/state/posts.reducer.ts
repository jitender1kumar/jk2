import { Action, createReducer, on } from "@ngrx/store";
import { PostsState, intialState } from "./posts.state";
import { addPost, decrement, increment, reset } from "./posts.action";
import { state } from "@angular/animations";
import { getQty } from "./posts.selector";


const _postsReducer = createReducer(intialState,
   
on(addPost,(state, action)=>
    {
        let post = {...action.post};   
        return {
            ...state,
           posts:[...state.posts,post],
    
        };
    }),

on(increment,(state, action)=>
    {
        const updatedPosts = state.posts.map(post=>{
            return action.post.id === post.id?action.post:post;
        })
        return {
            ...state,
    posts:updatedPosts,
        };
    }),
    on(decrement,(state, action)=>
        {
            const updatedPosts = state.posts.map(post=>{
                return action.post.id === post.id?action.post:post;
            })
            return {
                ...state,
        posts:updatedPosts,
            };
        }),
        on(reset,(state, action)=>
            {
                const updatedPosts = state.posts.map(post=>{
                    return action.post.id === post.id?action.post:post;
                })
                return {
                    ...state,
            posts:updatedPosts,
                };
            })
)


export function postsReducer(state:any,action:any)
{
    return _postsReducer(state,action);
}