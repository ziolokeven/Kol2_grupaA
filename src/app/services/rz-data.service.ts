import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RZDataService {
  private url = "https://kol2tai.herokuapp.com"
  constructor(private http:HttpClient) { }
  getALL() {
    return this.http.get(this.url + '/api/order/items');
  }
  getBYId(id){
    return this.http.get(this.url + '/api/order/items' + id);
  }
}


