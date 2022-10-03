import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listapp',
  templateUrl: './listapp.component.html',
  styleUrls: ['./listapp.component.css']
})
export class ListappComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onBack(){this.router.navigateByUrl('/create_offer')}
}
