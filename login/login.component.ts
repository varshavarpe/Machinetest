import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string="";
  password:string="";
  formdata:any;
  data:any;

  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup(
      {
      email:new FormControl("",Validators.compose([Validators.required,Validators.pattern('sntuser')])),
      password:new FormControl("",Validators.compose([Validators.required, Validators.pattern('Snt@1234')])),

    })
    if(localStorage.getItem("email")=="sntuser" && localStorage.getItem("password")=="Snt@1234"){
      window.location.href="/register"
    }
  }

  submitdata(data:any){
    if(data.email == "sntuser" && data.password == "Snt@1234"){
    console.log(data);
    localStorage.setItem("email",(data.email));
    localStorage.setItem("password",(data.password));
      window.location.href ="/register"
    }
  } 

}
