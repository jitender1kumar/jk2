import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'; 
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { getPosts } from '../posts/state/posts.selector';
import {getPayfee} from '../../../Projects/payfee/src/app/payfee/payfee.selector'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
value: any=false;
  posts: any;
  payf:any;
constructor(private store:Store<AppState>){

}
@Input() lists: any;

ngOnInit():void{
  this.posts = this.store.select(getPosts);
  this.payf = this.store.select(getPayfee);
  }
}
