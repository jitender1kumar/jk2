import { Component } from "@angular/core";
import { FormControl, NgForm, NgModel } from "@angular/forms";



@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html',
})
export class AuthComponent
{
getPasswordErrors(password: NgModel) {
    
}
isLoginMode =true;
onSwitchMode()
{
    this.isLoginMode = !this.isLoginMode;
}
onFormSubmit(authform:NgForm)
{
    console.log(authform.value);
}

}