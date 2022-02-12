import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit, OnDestroy {
todo: Todo;
  constructor(
    private dataService: DataService
  ) { }
  ngOnDestroy(){
    throw new Error('Method not implemented.');
   this.dataService.setParams({});
  }


  ngOnInit() {
    this.todo= this.dataService.getParams().todo;
  }




}
