import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log("Data services connected");
  }

  getPosts(param : string){
   return this.http.get('http://localhost:8080/BackEnd/webresources/first/'+param).
    map(res => res.json());
  }

}
