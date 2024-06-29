import { Component, OnInit } from '@angular/core';
import { getPayfee } from '../../../Projects/payfee/src/app/payfee/payfee.selector';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { getPaidfee } from '../../../Projects/payfee/src/app/paidfees/paidfees.selector';

@Component({
  selector: 'app-payfees',
  templateUrl: './payfees.component.html',
  styleUrl: './payfees.component.css'
})
export class PayfeesComponent implements OnInit {

  studentid: any;
payf:any;
paidf:any;
studentinfo:any;
studentid2: any;
constructor(private store:Store<AppState>){

}

ngOnInit():void{
  this.studentid="";
  }
  getsutdentinfo() {
    
    this.payf = this.store.select(getPayfee);
    console.log(this.payf);
    }
    getsutdentpaidfees() {
      
      this.paidf = this.store.select(getPaidfee);
      console.log(this.paidf);
    }
}
