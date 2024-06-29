import { Component,VERSION, OnInit,ViewChild, ElementRef } from '@angular/core';
import { getPayfee } from '../../../Projects/payfee/src/app/payfee/payfee.selector';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { getPaidfee } from '../../../Projects/payfee/src/app/paidfees/paidfees.selector';
import { Paidtutionfees } from '../../../Projects/payfee/src/app/model/paidfees.model';
import { studenttutionfee } from '../../../Projects/payfee/src/app/paidfees/paidfees.action';
import { NgForm } from '@angular/forms';
import { PaidfeeState } from '../../../Projects/payfee/src/app/paidfees/paidfees.state';

@Component({
  selector: 'app-paystudentfees',
  templateUrl: './paystudentfees.component.html',
  styleUrl: './paystudentfees.component.css'
})
export class PaystudentfeesComponent implements OnInit {
  name = "Angular " + VERSION.major;
  
  @ViewChild("student_id")student_id!: ElementRef;
  @ViewChild("studentadvancfee")studentadvancfee!: ElementRef;
  @ViewChild("studenttutionfeepaymode")studenttutionfeepaymode!: ElementRef;
  @ViewChild("studentpaidfeesdate")studentpaidfeesdate!: ElementRef;
  @ViewChild("studenttutionfee")studenttutionfee!: ElementRef;
  @ViewChild("studentlastdateoffeesubmission")studentlastdateoffeesubmission!: ElementRef;
  @ViewChild("studentlatfee")studentlatfee!: ElementRef;
  @ViewChild("studentpaidfee")studentpaidfee!: ElementRef;
  @ViewChild("studentadvancfee")paytutionfeebtn!: ElementRef;
  


studentadvancfees: any;
  studentid: any="";
  payf:any;
  paidf:any;
  studentinfo:any;
  studentid2: any;
   month:any;
   paifeedate:any;
   latefeeperday:any;
   tutionfees:any;
  constructor(private store:Store<AppState>){
    this.latefeeperday=0;
    const d = new Date();
    this.month = "10th/"+ d.getMonth()+"/"+d.getFullYear();
    this.paifeedate = d.getDate()+"/"+ d.getMonth()+"/"+d.getFullYear();
    if(d.getDate()>=10){
    this.latefeeperday = (d.getDate()-10)*10;
  }
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
      paytutionfee() {
        console.log(this.studentadvancfee.nativeElement.value);
        console.log(this.studentid);
        const paidf:Paidtutionfees={
          studentid: this.studentid,
    studentduefee:"0",
    studentpaidfee:this.studentpaidfee.nativeElement.value,
    studenttutionfeepaymode:this.studenttutionfeepaymode.nativeElement.value,
    studentlastdateoffeesubmission:this.studentlastdateoffeesubmission.nativeElement.value,
    studentlatfee:this.studentlatfee.nativeElement.value,
    studentpaidfeesdate:this.studentpaidfeesdate.nativeElement.value,
    studenttutionfee:this.studenttutionfee.nativeElement.value,
    studentpaidfeesslipno:this.studentid+this.studentpaidfeesdate.nativeElement.value+"00"+this.studentpaidfee.nativeElement.value,
        }
        this.store.dispatch(studenttutionfee({paidf}));

       }
}
