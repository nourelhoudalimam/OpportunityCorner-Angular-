import { Component, OnInit } from '@angular/core';
import Swiper, { Keyboard, Pagination, Virtual } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation } from "swiper";
import { BehaviorSubject } from 'rxjs';
import { ɵNullViewportScroller } from '@angular/common';
import { NonNullAssert } from '@angular/compiler';
import { NonNullableFormBuilder } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { TipsService } from '../tips.service';





@Component({
  selector: 'app-tipspage',
templateUrl: './tipspage.component.html',
  styleUrls: ['./tipspage.component.css']
})
export class TipspageComponent  implements OnInit {

 tip!:any;
 istock:string="assets/imgs/istockphoto-1246979859-612x612.jpg";
 istockphoto:string="assets/imgs/istockphoto-1309883975-612x612.jpg";
 creative:string="assets/imgs/creative.jpeg";
 image4:string="assets/imgs/internship.jpg";
 image3:string="assets/imgs/images-_1_.jpg";



  constructor(private userServ:UserServiceService,private router:Router,private tipsrv:TipsService) {}
ngOnInit(): void {this.tipsrv.getAlltips().subscribe(data=>this.tip=data)

}
onSave(){
  if(!this.isAuthentificated){return this.router.navigateByUrl('/login');}
  else{return console.log("heloo");}
}
isAuthentificated(){
  return this.userServ.isAuthentificated()
}
onClick(){
  var popupViews = document.querySelectorAll('.popup-view');
  var popupBtns = document.querySelectorAll('.btn');
  var closeBtns = document.querySelectorAll('.close-btn');

  //javascript for quick view button
  var popup = function(popupClick:any){
    popupViews[popupClick].classList.add('active');
  }

  popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () => {
      popup(i);
    });
  });

  //javascript for close button
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      popupViews.forEach((popupView) => {
        popupView.classList.remove('active');
      });
    });
  });
}
isAuthentifiated(){
  return this.userServ.isAuthentificated()
}
onLoad(){$(".morebox").slice(0, 4).show();
if ($(".box:hidden").length != 0) {
  $(".load-more").show();
}
$(".load-more").on('click', function (e) {
  e.preventDefault();
  $(".morebox:hidden").slice(0, 6).slideDown();
  if ($(".morebox:hidden").length == 0) {
    $(".load-more").fadeOut('slow');
  }
});
}}


