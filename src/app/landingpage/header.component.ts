import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() main="";
@Input() cards="";
samsung:string="assets/imgs/samsung.png";
huawei:string="assets/imgs/huawei.jpg";
orange:string="assets/imgs/orange.png";
carrefour:string="assets/imgs/Carrefour.png";
delice:string="assets/imgs/delice.png";
volkswagen:string="assets/imgs/volkswagen.jpg";
google:string="assets/imgs/google.jpg";
sagem:string="assets/imgs/sagem.png";
  logo:string="assets/imgs/logo.PNG";
  giz:string="assets/imgs/giz.jpg";
  sofrecom:string="assets/imgs/sofrecom.png";
  actia:string="assets/imgs/actia.jpg";
  capgemini:string="assets/imgs/capgemini.jpg";
  draxlmaier:string="assets/imgs/draexlmaier.png";
  microsoft:string="assets/imgs/Microsoft.jpg";
 landing:string="assets/imgs/landing.jpg";
 calendar:string="assets/imgs/calendar.png";
 getready:string="assets/imgs/getready.jpg";
 chasse:string="assets/imgs/chasse.PNG";
RPO:string="assets/imgs/RPo.PNG";
LVDF:string="assets/imgs/LVDF.PNG";
SOURCING:string="assets/imgs/SOURCING.PNG";


  constructor(private router:Router,private userServ:UserServiceService) { }

  ngOnInit(): void {
  }
onTips(){
  this.router.navigateByUrl('/Tips');
}
onEvents(){this.router.navigateByUrl('/Events');}

onOffers(){this.router.navigateByUrl('/Offers');}
onRecruiter(){
  this.router.navigateByUrl('/Recruiter_access');
}
onCandidate(){
  this.router.navigateByUrl('/Candidate_access');
}

  
}

