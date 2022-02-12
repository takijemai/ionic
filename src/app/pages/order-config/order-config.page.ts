import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Todo } from 'src/app/shared/todo';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-order-config',
  templateUrl: './order-config.page.html',
  styleUrls: ['./order-config.page.scss'],
})
export class OrderConfigPage implements OnInit {

   form: FormGroup;
   todo: Todo;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private dataService: DataService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.todo= this.dataService.getParams().todo;
    this.patchForm();
  }

patchForm(){
  if(this.todo){
  this.form.patchValue({
  title:this.todo.title,
  desc:this.todo.desc
  });
  }
}



createForm(){
this.form= this.fb.group({
title:['', Validators.required],
desc:['', Validators.required]
});
}


onSubmit(){
console.log('this.form.value');
let form= this.form.value;
if(this.todo){
this.todo.title= form.title;
this.todo.desc= form.desc;
this.todo.date= new Date();
}
this.navCtrl.pop();
}













}
