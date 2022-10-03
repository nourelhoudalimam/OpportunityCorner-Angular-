import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { remove, value } from 'dom7';
import { Observable, Subscription } from 'rxjs';
import { CompanyService } from '../company.service';
import { Offre } from '../offre';

import { OffreService } from '../offre.service';

import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-offerlist',
  templateUrl: './offerlist.component.html',
  styleUrls: ['./offerlist.component.css']
})
export class OfferlistComponent implements OnInit   {write:string="assets/imgs/write.PNG";
Off!:any;
form:any;id!:number;
  listData: never[];
  date:any;

  constructor(private fb:FormBuilder,private data:OffreService,private router:Router,private route:ActivatedRoute) {
    this.listData=[];
    this.form=new FormGroup({
      company:new FormControl("",Validators.required),
      poste:new FormControl("",Validators.required),

      description:new FormControl("", Validators.required)
    })
   }



  ngOnInit() :void{
 /* this.route.queryParams.subscribe((params)=>{console.log(params);
  this.listData=JSON.parse(params['listData']);*/
  this.data.getAlloffers().subscribe(d=>this.Off=d);

}
onClick(){
  var popupViews = document.querySelectorAll('.popup-view');
  var popupBtns = document.querySelectorAll('.btn1');
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
onLoad(){$(".morebox").slice(0, 3).show();
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



  Remove(id:number):void{this.data.deleteoffre(id).subscribe(data=>{this.Off=this.Off.filter((u: any)=>u!==this.Off.id)})}



}


