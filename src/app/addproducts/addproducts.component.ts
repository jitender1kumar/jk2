import { Component, Input } from '@angular/core';
import { Post } from '../models/posts.model';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { addPost } from '../posts/state/posts.action';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {

qty: any;
description: any;
title: any;
id: any;
constructor(private store:Store<AppState>)
{
  
}
addproduct() {
  const post:Post={
    id: this.id,
    title: this.title,
    description: this.description,
    qty: this.qty
  }
  this.store.dispatch(addPost({post}));
//this.val=true;
}
}

