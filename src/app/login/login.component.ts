import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:string="assets/imgs/téléchargement.PNG";
  loginForm!: FormGroup;
errors!:string;
  constructor(private fb:FormBuilder ,private usrServ:UserServiceService) { }

  ngOnInit(): void {
  this.loginForm=this.fb.group({
    email:["",[Validators.required,Validators.email]],
    password:["",[Validators.required]]
  })

  }
  onSubmitLogin(){
    console.log(this.loginForm);
    console.log(this.loginForm.controls["email"].value);
    console.log(this.loginForm.controls["password"].value);

  }
  Login(){ var user=new User()
    this.usrServ.Login(this.loginForm.controls["email"].value,this.loginForm.controls["password"].value).subscribe(

      logRespons=>{
        user.username=logRespons.user.username,
        user.fullname=logRespons.user.fullname,
        user.email=logRespons.user.email,
        user.date_naiss=logRespons.user.date_naiss,
        user.password=logRespons.user.password,
        user.phonenumber=logRespons.user.phonenumber,
        user.roleusers=logRespons.user.roleusers
        const jwt=logRespons.accessToken
        this.usrServ.saveUser(user,jwt)
      }
    )

  }
isAuthentificated(){
  return this.usrServ.isAuthentificated()
}
saveUser(user:User,jwt:string){return this.usrServ.saveUser}
isAdmin(){return this.usrServ.isAdmin()
}}
