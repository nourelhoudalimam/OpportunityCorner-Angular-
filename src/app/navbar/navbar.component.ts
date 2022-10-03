import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
logo:string="assets/imgs/logo.PNG";
  constructor(private router:Router,private usrSer:UserServiceService) { }

  ngOnInit(): void {
  }
onLogin(){
  this.router.navigateByUrl('/login');
}
onSignUp(){
  this.router.navigateByUrl('/Sign_up');
}
onResp(){
 const menu = document.querySelector('#menu-btn');
 let  navbar = document.querySelector('.navbar');
        
       
       menu?.addEventListener ('click',()=>{
        menu?.classList.toggle('fa-times');
        navbar?.classList.toggle('active');
    }
    )  
        ;
         onclick = () =>
        window.onscroll = () =>{
            menu?.classList.remove('fa-times');
            navbar?.classList.remove('active');
        }
}
isAuthentificated(){return this.usrSer.isAuthentificated()}
Logout(){return this.usrSer.Logout()}
}

