import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
candidat:string="assets/imgs/candidat.PNG";
user5:string="assets/imgs/user5.png";
user3:string="assets/imgs/user3.jpg";
post:string="assets/imgs/post.PNG";
user4:string="assets/imgs/user4.jpg";
quote:string="assets/imgs/quote.png";
entretien:string="assets/imgs/entretien.PNG";
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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onOffers(){this.router.navigateByUrl('/Offers');}
 onClick()
 {
 let tabs=document.querySelectorAll(".button"),
 contents=document.querySelectorAll(".msg1");
 tabs.forEach((tab,index)=>
{tab.addEventListener("click",()=>
{tabs.forEach((tab)=>tab.classList.remove("is-active"));
 tabs[index].classList.add("is-active"); 
contents.forEach((content)=>content.classList.remove("is-active"));
contents[index-2].classList.add("is-active");
});


} );
 }
}
