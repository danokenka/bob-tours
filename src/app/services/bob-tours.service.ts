import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import _ from 'lodash'; 

@Injectable({
  providedIn: 'root'
})
export class BobToursService {

  public regions: any;
  public tourtypes: any;

  //decalred a base url containing the root path to our database call
  baseUrl = 'https://bob-tours-app-7f7b9-default-rtdb.firebaseio.com/';  

  //inject http client in constructor
  constructor(private http: HttpClient) {}  

  initialize() {
    this.getRegions().then(data => this.regions = data);
    this.getTourtypes().then(data => this.tourtypes = _.sortBy(data, 'Name'));
  }

  getRegions() {
    //define our request url  
    let requestUrl = `${this.baseUrl}/Regions.json`;  
    return this.http.get(requestUrl).toPromise();  } 

    getTourtypes() {
      let requestUrl = `${this.baseUrl}/Tourtypes.json`;  
      return this.http.get(requestUrl).toPromise(); 
    }

}


