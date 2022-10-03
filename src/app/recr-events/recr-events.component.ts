import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-recr-events',
  templateUrl: './recr-events.component.html',
  styleUrls: ['./recr-events.component.css']
})
export class RecrEventsComponent implements OnInit {
  us:any;
  constructor(private d :EventService) { }

  ngOnInit(): void {this.d.getAllevents().subscribe(data =>this.us=data);
  }
  onEdit(){

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
}
