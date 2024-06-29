import { Paidtutionfees } from "../model/paidfees.model";


export interface PaidfeeState
{
    paidf:Paidtutionfees[];
}

export const initialState:PaidfeeState={
    paidf:[{
        studentid: 'pooja001', studentduefee: '0', studentpaidfee: '1200',
        studentpaidfeesdate: '07/april/2024',
        studenttutionfee: "1200",
        studentpaidfeesslipno: "2432pk",
        studentlastdateoffeesubmission: "10/april/2024",
        studentlatfee: "0",
        studenttutionfeepaymode: "cash"
    },{
        studentid: 'jitender001', studentduefee: '0', studentpaidfee: '1220',
        studentpaidfeesdate: "12/apr/2024",
        studenttutionfee: "1200",
        studentpaidfeesslipno: "3424jk",
        studentlastdateoffeesubmission: "10/april/2024",
        studentlatfee: "20",
        studenttutionfeepaymode: "cash"
    },{
        studentid: 'jitender001', studentduefee: '0', studentpaidfee: '1200',
        studentpaidfeesdate: "10/may/2024",
        studenttutionfee: "1200",
        studentpaidfeesslipno: "3243jk",
        studentlastdateoffeesubmission: "10/may/2024",
        studentlatfee: "0",
        studenttutionfeepaymode: "cash"
    },{
        studentid: 'shiv001', studentduefee: '0', studentpaidfee: '1200',
        studentpaidfeesdate: "09/apr/2024",
        studenttutionfee: "1200",
        studentpaidfeesslipno: "1234sh",
        studentlastdateoffeesubmission: "10/april/2024",
        studentlatfee: "0",
        studenttutionfeepaymode: "cash"
    }
    ],
}


