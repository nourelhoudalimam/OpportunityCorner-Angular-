import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cand',
  templateUrl: './cand.component.html',
  styleUrls: ['./cand.component.css']
})
export class CandComponent implements OnInit {
cand:string="assets/imgs/admin.PNG";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onApply(){this.router.navigateByUrl('/Candidate_List_Apply');}
onEvent(){this.router.navigateByUrl('/Candidate_Events_Participated');}
onTips(){this.router.navigateByUrl('/Candidate_Tips_Saved');}
}
