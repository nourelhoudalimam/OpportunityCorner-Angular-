import { Component, OnInit } from '@angular/core';
import { TipsService } from '../tips.service';

@Component({
  selector: 'app-recr-tips',
  templateUrl: './recr-tips.component.html',
  styleUrls: ['./recr-tips.component.css']
})
export class RecrTipsComponent implements OnInit {
us:any;
  constructor(private d:TipsService) { }

  ngOnInit(): void {this.d.getAlltips().subscribe(data =>this.us=data);
  }
  onEdit(){

  }
  Remove(){}
  onBack(){}
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


  }}
