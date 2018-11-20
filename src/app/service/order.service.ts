import { Injectable } from '@angular/core';
import { Order } from '../Order';
//import { ORDERS } from '../Orders';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
;
@Injectable({
  providedIn: 'root'
})
export class OrderService {


  ORDERS: Order[];
  baseurl='http://localhost:1337/';
  rst: Observable<Order[]>;
  constructor(private _http: HttpClient) { 
    //this.rst = this._http.get<Order[]>(this.baseurl+"order");
  }

  getOrders():Observable<Order[]>{
    return this._http.get<Order[]>(this.baseurl+"orders");
  }
  getOrder(id: string): Observable<Order> {
    // TODO: send the message _after_ fetching the hero
    return this._http.get<Order>(this.baseurl+"orders/"+id);
  }
  // creat
  seveOrder(order:Order): Observable<Order> {
    return this._http.post<Order>(this.baseurl+"orders/",order);

  }
  update(order:Order): Observable<Order>{
    return this._http.put<Order>(this.baseurl+"orders/"+order.id,order)
  }
  delete(order:Order): Observable<Order>{
    return this._http.delete<Order>(this.baseurl+"orders/"+order.id)
  }
}
