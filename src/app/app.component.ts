import {
  Component,
  Injectable
} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {DataService} from './shared/data.service';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
//
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [HomeComponent, AboutComponent],
    providers: [DataService]
})


export class AppComponent {
  items:Array<any>;
  constructor(dataService: DataService){
    this.items = dataService.getItems();
  }
  listItemClick(e: any){
    for(var i = 0;i < this.items.length;i++){
      this.items[i].active = false;
    }
    this.items[e].active = true;
  }
}
