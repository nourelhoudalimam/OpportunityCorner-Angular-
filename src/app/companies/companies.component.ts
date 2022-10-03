import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  samsung:string="assets/imgs/samsung.png";
  huawei:string="assets/imgs/huawei.jpg";
  orange:string="assets/imgs/orange.png";
google:string="assets/imgs/google.jpg";
  sagem:string="assets/imgs/sagem.png";
  totalLength:any;
  page:number=1; comp!:any;
  constructor(private compsrv:CompanyService) { }

  ngOnInit(): void {
this.compsrv.getAllCompanies().subscribe(data=>this.comp=data)
}
sendData(event:any){
  console.log(event.target.value);
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
}
}
