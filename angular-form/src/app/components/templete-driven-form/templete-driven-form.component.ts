import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.css'],
})
export class TempleteDrivenFormComponent implements OnInit{

  // Two Way Databinding :  USING form reference variable

  @ViewChild('userForm',{static:true}) userForm:NgForm|undefined;

  ngOnInit(): void {
    console.log(this.userForm)
     this.user.name='Testing';
     this.user.email="srijangiri2003@gmail.com";

     setTimeout(()=>{
  this.userForm?.setValue(this.user)
     },2000)
  }





  //Two Way Databinding :  USING [(ngModel)]
  user: User = new User("Durgesh", "durgesh@gmail.com", "I am a teacher", "female", "Lucknow");




  formSubmitted(userForm: NgForm) {
    console.log('Form Submitted');
    console.log(userForm);
    console.table(userForm.value);
    console.log(userForm.form.controls['name'].value);
    console.log(userForm.form.controls['email'].value);
    console.log(userForm.form.controls['about'].value);
    console.log(userForm.form.controls['gender'].value);
    console.log(userForm.form.controls['city'].value);

    console.log(userForm.valid);
    this.user.name="Ankit";
    this.user.about="I dont know programming";
    this.user.email="ankit@gmail.com";
    this.user.gender="Female";
    this.user.city="Delhi";

  }
}
