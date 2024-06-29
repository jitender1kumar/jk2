import { Post } from "../../models/posts.model"

export  interface PostsState
{
    posts:Post[];
}
export  interface PostsStateQty
{
    id:Post["id"];
    qty:Post["qty"];
}
export const intialState:PostsState = {
    posts:[
        {id:'1',title:'Sample title 1', description:'Sample description 1', qty:1},
        {id:'2',title:'Sample title 2', description:'Sample description 2', qty:1},
       
    ],
};