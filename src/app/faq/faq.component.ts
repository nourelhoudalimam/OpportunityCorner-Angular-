declare var $: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
FAQ:string="assets/imgs/FAQ.PNG";

 
  constructor(private router:Router) { }

  ngOnInit(): void {}
   onSearch(){
    const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq!.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )
   }
    onContact(){
      this.router.navigateByUrl('/Contact');
    }
  
  }
    
 
      
   

