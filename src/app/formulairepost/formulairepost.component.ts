import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Offre } from '../offre';
import { OffreService } from '../offre.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-formulairepost',
  templateUrl: './formulairepost.component.html',
  styleUrls: ['./formulairepost.component.css']
})
export class FormulairepostComponent implements OnInit {
ApplyForm!:FormGroup;
Offre=new Offre();idu!:number;ido!:number;
  submitted= false;
  constructor(private fb:FormBuilder,private router:Router,private srv:OffreService,private usrv:UserServiceService ) { }

  ngOnInit(): void { this.ApplyForm=this.fb.group({
    email:["",[Validators.required,Validators.email]],
    phone:["",[Validators.required]],
    firstname:["",[Validators.required]],
    lastname:["",[Validators.required]],
    check:[false,[Validators.requiredTrue]],
    postal:["",[Validators.required]],
    town:["",[Validators.required]],
    profile:["",[Validators.required]],
  })
  }
onDescrip()             {return this.router.navigateByUrl('/Description');}
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
get f() { return this.ApplyForm.controls; }

onPostule(){this.usrv.addOfferUser(this.idu,this.ido).subscribe(data=> alert("you applied successfully"))}


}
