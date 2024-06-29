import { Component } from '@angular/core';
import { Payfee } from '../../../Projects/payfee/src/app/model/payfee.model';
import { Store } from '@ngrx/store';
import { studentAddmission } from '../../../Projects/payfee/src/app/payfee/payfee.action';
import { AppState } from '../store/app.state';
@Component({
  selector: 'app-studentadmission',
  templateUrl: './studentadmission.component.html',
  styleUrl: './studentadmission.component.css'
})
export class StudentadmissionComponent {
  constructor(private store:Store<AppState>)
  {
    
  }
studentname: any;
studentgender: any;
studentsection: any;
studentaddress: any;
studentaddmissiondate: any;
studentpendingfee: any;
studentadvancfee: any;
studentmonthlyfee: any;
studentpaidfee: any;
studenttravling: any;
studentstatus: any;
studentclass: any;
studenttutionfee: any;
studentaddmission() {
  const payf:Payfee={
    studentid: this.studentname + "001",
    studentname: this.studentname,
    studentgender: this.studentgender,
    studentsection: this.studentsection,
    studentaddress: this.studentaddress,
    studentaddmissiondate: this.studentaddmissiondate,
    studentpendingfee: this.studentpendingfee,
    studentadvancfee: this.studentadvancfee,
    studentmonthlyfee: this.studentmonthlyfee,
    studentpaidfee: this.studentpaidfee,
    studenttravling: this.studenttravling,
    studentstatus: this.studentstatus,
    studentclass: this.studentclass,
    studenttutionfee: this.studenttutionfee
  }
  this.store.dispatch(studentAddmission({payf}));
}
}
