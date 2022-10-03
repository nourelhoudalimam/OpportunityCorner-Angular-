import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact:string="assets/imgs/contact.PNG";
ContactForm!:FormGroup;
form={
  fullname:"",
  
  email:"",
  phone:"",message:""
  }
  loading: boolean=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {}
  
  onSend(){


  }}


