import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})


export class EventpageComponent implements OnInit {
composition:string="assets/imgs/composition.jpg";
festival:string="assets/imgs/festival.jpg";
run:string="assets/imgs/run.jpg";

images_1:string="assets/imgs/images_1.jpg";
ev!:any;
  constructor(private userServ:UserServiceService,private router:Router,private evsrv:EventService) { }

  ngOnInit(): void {this.evsrv.getAllevents().subscribe(data=>this.ev=data)
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
    closeBtns.forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
          popupView.classList.remove('active');
        });
      });
    });


}
onSave(){
  if(!this.isAuthentificated()){return this.router.navigateByUrl('/login');}
  else{return console.log("heloo");}
}
isAuthentificated(){
  return this.userServ.isAuthentificated()
}
onLoad(){$(".morebox").slice(0, 3).show();
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
