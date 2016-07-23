import {Injectable} from '@angular/core';

@Injectable()


export class DataService {
  items:Array<any>;
  constructor(){
    this.items = [
      {name: 'Joe'},
      {name: 'Jim'},
      {name: 'Jon'},
      {name: 'Jay'},
      {name: 'Jen'}
    ];
  }
  getItems(){
    return this.items;
  }
}
class Product {
  name: string;
  price: number;
  description: string;
  tags: string[];
  active: boolean;
}
