import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
	private username:string;
	private client_id='15805b5d58ab84a3ad47';
	private client_secret:'5b9140a52ff92dc80a5f15a5cfb88a3d28818e9b'; 

	constructor(private _http:Http){
		console.log('Github service ready....');
		this.username='vinit parmar';
	}

	getUser(){
	return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}
}