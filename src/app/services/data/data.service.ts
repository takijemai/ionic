import { Todo } from './../../shared/todo';
import { Injectable } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/naming-convention
const Todos: Todo[]= [
{
title: 'title',
desc: 'description',
date: new Date()
},
{
  title: 'title',
  desc: 'description',
  date: new Date()
  },
  {
    title: 'title',
    desc: 'description',
    date: new Date()
    },
    {
      title: 'title',
      desc: 'description',
      date: new Date()
      }
];


@Injectable({
  providedIn: 'root'
})
export class DataService {
private navParams: any = {};
  constructor() { }



getParams(){
return this.navParams;
}
setParams(body){
this.navParams= body;
}
getData(){
return Todos;
}

postData(){
throw new Error('method not working');
}
updateData(){
  throw new Error('method not working');
}

deleteData(){
  throw new Error('method not working');
}


















}











