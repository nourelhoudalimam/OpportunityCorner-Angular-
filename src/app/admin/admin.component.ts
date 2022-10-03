import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
admin:string="assets/imgs/cand.PNG";
Users:any;
u:any;id!:any;idg!:any;
  constructor(private srv:UserServiceService,private router:Router) { }

  ngOnInit(): void {this.srv.getAllUsers().subscribe(data=>{this.Users=data;})
  this.srv.AddUser(this.u,this.id,this.idg).subscribe(data=>{this.u=data;})
  this.srv.DeleteUser(this.id).subscribe(data=>{this.id=data;})
  }
onEvent(){this.router.navigateByUrl('/Admin_Event');}
ontips(){this.router.navigateByUrl('/Admin_Tips');}
onComp(){this.router.navigateByUrl('/Admin_Companies');}
onUser(){this.router.navigateByUrl('/Admin_user');}
}
