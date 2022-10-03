import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {

  evform!:FormGroup;
us!:any;ev:string="assets/imgs/ev.PNG";
  listData: never[];data:any;idev!:number;
  constructor(private fb:FormBuilder,private router:Router,private d:EventService) {this.listData=[];
    this.evform=new FormGroup({
     lieu:new FormControl("",Validators.required),
     orga:new FormControl("",Validators.required),
      devent:new FormControl("",Validators.required),
     titre:new FormControl("",Validators.required),
      Description1:new FormControl("", Validators.required),
      typeev:new FormControl("", Validators.required),
    })
   }

  ngOnInit(): void {this.d.getAllevents().subscribe(data =>this.us=data);
  }onClick(){
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
onEdit(){

}
Remove(id:number):void{this.d.deleteevent(id).subscribe(data=>{this.us=this.us.filter((u: any)=>u!==this.us.idev)})}


onLoad(){$("tr").slice(0, 5).show();
if ($("tr:hidden").length != 0) {
  $(".load-more").show();
}
$(".load-more").on('click', function (e) {
  e.preventDefault();
  $("tr:hidden").slice(0, 2).slideDown();
  if ($("tr:hidden").length == 0) {
    $(".load-more").fadeOut('slow');
  }
});
}
onCreateEvent(){this.d.addEventWithtest(this.us,this.idev).subscribe(data=>alert("event added successfully"))}
}
