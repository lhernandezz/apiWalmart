import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class WalmartService {
    constructor(private http: Http) {
    }

   public getRepos(zipcode) {
        let repos = this.http.get(`http://api.walmartlabs.com/v1/stores?format=json&zip=${zipcode}&apiKey=uu99pmfhgdm5x3hytebw5d82`);
        return repos;
    }

    getDetails(repo) {
        let headers = new Headers();
        headers.append('Accept', 'application/vnd.github.VERSION.html');

        return this.http.get(`${repo.url}/readme`, { headers: headers });
    }
}