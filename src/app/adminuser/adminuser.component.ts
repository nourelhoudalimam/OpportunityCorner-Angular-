import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {
userform!:FormGroup;us!:any;
usere:User=new User();idr!:number;idg!:number;
  listData: never[];
  user:string="assets/imgs/us.PNG";  submitted = false;
  constructor(private fb:FormBuilder,private router:Router,private d:UserServiceService) {this.listData=[];
    this.userform=new FormGroup({
     username:new FormControl("",Validators.required),
      fullname:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      phonenumber:new FormControl("",Validators.required), date_naiss:new FormControl("",Validators.required),
      password:new FormControl("", Validators.required),
      roleusers:new FormControl("", Validators.required),
      sexuser:new FormControl("", Validators.required)})}
      newUser(): void {
        this.submitted = false;
        this.usere = new User();
      }
      ngOnInit(): void {this.d.getAllUsers().subscribe(data =>this.us=data);
      }
      onSubmit() {
        this.submitted = true;
        this.onAdd(this.usere.roleusers.idRole,this.usere.sexuser.idgender);
      }
onLoad(){$("tr").slice(0, 3).show();
if ($("tr:hidden").length != 0) {
  $(".load-more").show();
}
$(".load-more").on('click', function (e) {
  e.preventDefault();
  $("tr:hidden").slice(0, 1).slideDown();
  if ($("tr:hidden").length == 0) {
    $(".load-more").fadeOut('slow');
  }
});
}
onAdd(idr:number,idg:number){this.d.addUserWithUsername(this.usere,idr,idg).subscribe(data=>console.log(data))}
Remove(id:number):void{this.d.DeleteUser(id).subscribe(data=>{this.us=this.us.filter((u: any)=>u!==this.us.id)})}
onAddUser(){this.d.addUserWithUsername(this.usere,this.idr,this.idg).subscribe(data=>alert("user added successfully"))}
}
