import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tips } from '../tips';
import { TipsService } from '../tips.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-tips',
  templateUrl: './admin-tips.component.html',
  styleUrls: ['./admin-tips.component.css']
})
export class AdminTipsComponent implements OnInit {

  tipform!:FormGroup;
us!:any; tip:string="assets/imgs/tip.PNG";
  listData: never[];tipp=new Tips();
  submitted: boolean=false;
  constructor(private fb:FormBuilder,private router:Router,private d:TipsService) {this.listData=[];
    this.tipform=new FormGroup({
     titrecons:new FormControl("",Validators.required),

      contenu:new FormControl("", Validators.required)
    })
   }

  ngOnInit(): void {this.d.getAlltips().subscribe(data =>this.us=data);
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

Remove(id:number):void{this.d.deletetip(id).subscribe(data=>{this.us=this.us.filter((u: any)=>u!==this.us.idtip)})}

onBack(){}
onAdd(){this.d.addtipWithtest(this.tipp).subscribe( data => {
  console.log('Tip created');})}
}
