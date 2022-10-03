import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-cand-postule',
  templateUrl: './cand-postule.component.html',
  styleUrls: ['./cand-postule.component.css']
})
export class CandPostuleComponent implements OnInit {
Off:any;
  us!: any;
  constructor(private d:OffreService) { }

  ngOnInit(): void {this.d.getAlloffers().subscribe(data=>this.Off=data)
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
  onEdit(){

  }
  Remove(){}
}
