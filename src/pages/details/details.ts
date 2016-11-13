import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import {GitHubService} from '../../services/github';
import {WalmartService} from '../../services/service-walmart';
@Component({
    templateUrl: 'details.html',
    providers: [WalmartService]
})
export class DetailsPage {
    public readme = '';
    public repo;
 
    constructor(private github: WalmartService, 
                private nav: NavController, 
                private navParams: NavParams) {
        
        this.repo = navParams.get('repo');
        
        this.github.getDetails(this.repo).subscribe(
            data => this.readme = data.text(),
            err => {
                if (err.status == 404) {
                    this.readme = 'This repo does not have a README. :(';
                } else {
                    console.error(err);
                }
            },
            () => console.log('getDetails completed')
        );
    }
}

