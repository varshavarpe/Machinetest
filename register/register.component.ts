import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname:string="";
  lname:string="";
  email1:string="";
  password1:string="";
  cpassword:string="";
  mobileno:string="";
  formdata1:any;
  data1:any
  CustomValidators:any
  constructor() { }

  ngOnInit(): void {
    this.formdata1 = new FormGroup(
      {
      fname:new FormControl("",Validators.compose([Validators.required])),
      lname:new FormControl("",Validators.compose([Validators.required])),
      email1:new FormControl("",Validators.compose([Validators.required,Validators.email])),
      mobileno:new FormControl("",Validators.compose([Validators.required])),
      password1:new FormControl("",Validators.compose([Validators.required])),
      cpassword:new FormControl("",Validators.compose([Validators.required]))
      
    
      },
     
    )
  }
  submit(data1:any){
     console.log(data1) 
     let lc = {data1}
     localStorage.setItem("",JSON.stringify(lc))
  }
  logout(){
    localStorage.clear();
    window.location.href=""
  }

}
