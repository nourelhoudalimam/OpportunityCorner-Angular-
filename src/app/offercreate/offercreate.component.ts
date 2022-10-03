import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from '../offre';
import { OffreService } from '../offre.service';

import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-offercreate',
  templateUrl: './offercreate.component.html',
  styleUrls: ['./offercreate.component.css']
})
export class OffercreateComponent implements OnInit {
write:string="assets/imgs/write.PNG";

Offre=new Offre();
form:any;id!:number;idcomp!:number;
  listData: any[];
  constructor(private fb:FormBuilder,private router:Router,private route:ActivatedRoute,private srv:OffreService) {
    this.listData=[];
    this.form=new FormGroup({
      company:new FormControl("",Validators.required),
      post:new FormControl("",Validators.required),

      description:new FormControl("", Validators.required)
    })
   }


  ngOnInit(): void {

    }


    onCreateOffer(){this.srv.addOfferWithtest(this.Offre,this.idcomp).subscribe(data=>alert("add successfully"))}



/*onGO(offer:Offre){
/* let date=this.form.value;
  this.listData.push(date);
   this.router.navigate(['./offers_list'],{queryParams:{listData:JSON.stringify(this.listData)}});
   localStorage.setItem('date',JSON.stringify(this.listData));
this.form.reset();
*/
}
