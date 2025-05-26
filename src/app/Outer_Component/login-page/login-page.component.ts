import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
import { passMatch } from 'src/app/ValidationForm';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _service: AdminServiceService,
    private route: Router
  ) {}

  allUsers:any;

  loginForms = this.fb.group(
    {
      userNames: ['', [Validators.required,Validators.minLength(2)]],
      user_password: ['', Validators.required],
      confirm_passwords: ['', Validators.required],
    },
    {
      validators: passMatch('user_password', 'confirm_passwords'), // ✅ correct usage
    }
  );
  ngOnInit() {
    if (this._service.isLoggenIn()) {
      this.route.navigate(['/admin']);
    }

    this.getAllusers();
  }

  get userNames(){
    return this.loginForms.get('userNames');
  }
  get confirm_passwords() {
    return this.loginForms.get('confirm_passwords');
  }
  

  getAllusers(){
    this._service.getAll().subscribe((data)=>{
      this.allUsers = data;
      console.log("All users",this.allUsers)
    })
  }

  submitForms() {
    debugger;
    console.log('errros', this.loginForms.errors);

    console.log(this.loginForms.value);
    if (this.loginForms.invalid) {
      this.loginForms.markAllAsTouched();
      return;
    } else if (this.loginForms.valid) {
       debugger;
      const users = this.allUsers.find((m:any)=>{
          return m.userNames == this.loginForms.get('userNames')?.value && m.user_password == this.loginForms.get('user_password')?.value
      });

      if(users){
        alert("user found");
        localStorage.setItem("login-token",this.loginForms.get('userNames')?.value)
       this.route.navigate(['/admin']);

      }
      else{
        alert("No")
      }
      console.log("Check users",users)

      
    
      // this._service.logins(this.loginForms.value).subscribe(
      //   (data: any) => {
      //     if (data) {
      //       alert('Sucesss');

      //       this.route.navigate(['/admin']);
      //     }
      //     console.log(data);
      //   },
      //   (error: Error) => {
      //     alert('Failed');
      //   }
      // );
    }
  }
}
