import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WalmartService} from '../../providers/walmart-service';
import {Page, NavParams} from 'ionic-framework/ionic';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WalmartService]
})
export class HomePage {
public stores: any;
  //constructor(public navCtrl: NavController) {
    constructor(public walmartService: WalmartService) {
      this.loadStores();
    
  }
  loadStores(){
  this.walmartService.load()
  .then(data => {
    this.stores =  data.results;
    	console.log(data);
  });
}

}
