import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Company } from '../company';
import { Offre } from '../offre';
import { OffreService } from '../offre.service';

import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logo:string="assets/imgs/logo.PNG";
   Off!:any;us!:any;idu!:number;idoff!:number;
  constructor(private  data:OffreService,private route:ActivatedRoute,private router:Router,private usrsrv:UserServiceService) { }

  ngOnInit(): void {
    this.data.getAlloffers().subscribe(d=>this.Off=d);
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
onPostule(){return this.usrsrv.addOfferUser(this.idu,this.idoff).subscribe(data=>alert("apply successfully"))}
}
