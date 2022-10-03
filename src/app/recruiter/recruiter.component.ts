import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
hr:string="assets/imgs/hr.jpg";
recruiter:string="assets/imgs/recruteur.PNG";
SOURCING:string="assets/imgs/SOURCING.PNG";
pres:string="assets/imgs/pres.PNG";
suiv:string="assets/imgs/suiv.PNG";
qualification:string="assets/imgs/qualification.PNG";
accompagnement:string="assets/imgs/accompagnement.PNG";
user:string="assets/imgs/user.png";
user2:string="assets/imgs/user2.jpg";
user1:string="assets/imgs/user1.jpg";
quote:string="assets/imgs/quote.png";

  constructor(private router:Router,private userServ:UserServiceService) { }

  ngOnInit(): void {
  }
  
onHire()
{ return this.router.navigateByUrl('/Recruiter_corner');

}
onSave(){
  if(!this.isAuthentificated()){return this.router.navigateByUrl('/login');}
  else{return console.log("heloo");}
}
isAuthentificated(){
  return this.userServ.isAuthentificated()
}}
