import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class BobToursService {

  //decalred a base url containing the root path to our database call
  baseUrl = 'https://bob-tours-app-7f7b9-default-rtdb.firebaseio.com/';  

  //inject http client in constructor
  constructor(private http: HttpClient) {}  

  getRegions() {
    //define our request url  
    let requestUrl = `${this.baseUrl}/Regions.json`;  
    return this.http.get(requestUrl).toPromise();  } 
}


