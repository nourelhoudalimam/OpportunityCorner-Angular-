import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-companies',
  templateUrl: './admin-companies.component.html',
  styleUrls: ['./admin-companies.component.css']
})
export class AdminCompaniesComponent implements OnInit {
  compform!:FormGroup;
  us!:any;comp:string="assets/imgs/comp.PNG";
    listData: never[];
    constructor(private fb:FormBuilder,private router:Router,private d:CompanyService) {this.listData=[];
      this.compform=new FormGroup({
      nom:new FormControl("",Validators.required),
        domaine:new FormControl("",Validators.required),
        localisation:new FormControl("",Validators.required),
        phonenumber:new FormControl("",Validators.required),
       apropos:new FormControl("", Validators.required)
      })
     }

    ngOnInit(): void {this.d.getAllCompanies().subscribe(data =>this.us=data);
    }

  Remove(id:number):void{this.d.deleteCompany(id).subscribe(data=>{this.us=this.us.filter((u: any)=>u!==this.us.idComp)})}


  onLoad(){$("tr").slice(0, 5).show();
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
onCreateCompany(){this.d.AddCompany(this.us).subscribe(data=>alert("added company successfully"))}
}
