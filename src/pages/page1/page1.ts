import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {WalmartService} from '../../services/service-walmart';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [WalmartService]
  //templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  public foundRepos;
  public zipcode;
  constructor(private walmartsrv: WalmartService, private nav: NavController) {
 
  }
  getRepos() {
    this.walmartsrv.getRepos(this.zipcode).subscribe(
      data => {
        this.foundRepos = data.json();
    },
 );
  }
  goToDetails(repo) {
    this.nav.push(DetailsPage, { repo: repo });
  }

}
