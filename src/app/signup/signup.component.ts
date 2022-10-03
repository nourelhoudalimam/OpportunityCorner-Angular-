import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup:string="assets/imgs/signup.PNG";
form={
fullname:"",
username:"",
email:"",birth:"",
phone:"",password:""
}
  constructor(private userServ:UserServiceService) { }

  ngOnInit(): void {
  }

}
