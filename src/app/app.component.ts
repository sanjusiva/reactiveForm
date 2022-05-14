import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactiveForms';
  newForm=new FormGroup({
    fname:new FormControl('',[Validators.required]),
    lname:new FormControl(''),
    mobNo:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
  })
  userForm(){
    console.warn(this.newForm.value);
    
  }
  get fname(){
    return this.newForm.get('fname');
  }
  get mobNo(){
    return this.newForm.get('mobNo');
  }
  get email(){
    return this.newForm.get('email');
  }
}
