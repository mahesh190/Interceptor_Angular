import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private fb: FormBuilder,
      private _service: AdminServiceService,
      private route: Router,private _http:HttpClient) { }

  ngOnInit(): void {
  }
  signupForm = this.fb.group(
    {
      userNames: ['',Validators.required],
      user_password: ['', Validators.required]
    }
  );

 get userNames(){
    return this.signupForm.get('userNames');
  }
  get confirm_passwords() {
    return this.signupForm.get('confirm_passwords');
  }
  submitForms() {
    debugger;
    console.log('errros', this.signupForm.errors);

    console.log(this.signupForm.value);
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    } else if (this.signupForm.valid) {
     this._http.post("http://localhost:3000/users",this.signupForm.value).subscribe((data)=>{
        alert("Submitted")
     })
    }
  }
}
