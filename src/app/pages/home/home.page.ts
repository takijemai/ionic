import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Todo } from 'src/app/shared/todo';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 todos: Todo[];
 loading: boolean;
  constructor(
  private navCtrl: NavController,
  private alertCtrl: AlertController,
  private dataService: DataService
  ) { }

  ngOnInit() {
    this.getData();
  }


  createAp(){
this.navCtrl.navigateForward('/order-config');
  }
getData(){
  this.loading=true;
  setTimeout(()=> {
    this.loading=false;
    this.todos=this.dataService.getData();
    },3000);

this.todos= this.dataService.getData();
}

  detail(todo: Todo){
    this.dataService.setParams({
      todo
    });
  this.navCtrl.navigateForward('/order-details');

 }
async delete(index: number){
// eslint-disable-next-line prefer-const
let alert = await this.alertCtrl.create({
header:'Confirming delete',
mode:'ios',
message:'are you sure to delete',
buttons: [
  {
    text: 'no',
    role:'cancel'
  },
  {
    text: 'yes',
    handler : ()=>{
      console.log('delete ual');
      this.todos.splice(index,1);
  }
  }
]
});
await alert.present();
}
edit(todo: Todo){
this.dataService.setParams({
  todo
});
this.navCtrl.navigateForward('/order-config');
}



refresh(ev){
setTimeout(()=> {
this.todos=this.dataService.getData();
 ev.target.complete();
},3000);
}
loadData(ev){
  setTimeout(()=> {
    this.todos=this.todos.concat(this.dataService.getData());
    ev.target.complete();
    },3000);
}















}
