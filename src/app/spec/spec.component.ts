import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.css']
})
export class SpecComponent implements OnInit {
rec:string="assets/imgs/rec.PNG";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

onList(){
  return this.router.navigateByUrl('/offers_list');
}
onSave(){
  return this.router.navigateByUrl('/Recruiter_Saved_Tips');
}
onParticipate(){
  return this.router.navigateByUrl('/Recruiter_Participate_Events');
}
}
