import { Component, Input, OnInit } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../models/posts.model';
import { getPosts } from '../posts/state/posts.selector';
import { decrement, increment, reset } from '../posts/state/posts.action';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {


  posts!: Observable<Post[]>; 
  //qty!:Observable<qty>;
  constructor(private store:Store<AppState>){

  }
  @Input() lists: any;
  
  ngOnInit():void{
    this.posts = this.store.select(getPosts);
    }
decre(id:string,title:string,decreption:string,qty:number) {
  const post:Post={
    id: id,
    title:title,
    description:decreption,
    qty: qty-1
  }
  this.store.dispatch(decrement({post}));
  }
  edit(id:string,title:string,decreption:string,qty:number) {
    
    }
incr(id:string,title:string,decreption:string,qty:number) {
  
  const post:Post={
    id: id,
    title:title,
    description:decreption,
    qty: qty+1
  }
  this.store.dispatch(increment({post}));
  }
  resetdata(id:string,title:string,decreption:string,qty:number) {
    const post:Post={
      id: id,
      title:title,
      description:decreption,
      qty: qty-qty
    }
    this.store.dispatch(reset({post}));
    }
    }

 

