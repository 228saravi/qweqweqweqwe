import { Component, OnInit, ViewChild } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { OrderService } from '../service/order.service';
import { Order } from '../Order';
import { DxFormComponent } from 'devextreme-angular/ui/form';



@Component({
  selector: 'app-deteils-order',
  templateUrl: './deteils-order.component.html',
  styleUrls: ['./deteils-order.component.scss']
})
export class DeteilsOrderComponent implements OnInit {
  @ViewChild(DxFormComponent) form:DxFormComponent
  newOreder: boolean;
  order: Order;
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {

    this.newOreder = !!this.route.snapshot.paramMap.get('id'); 
    console.log(this.route.snapshot.paramMap.get('id'));
    if (this.newOreder)
    this.orderService.getOrder(this.route.snapshot.paramMap.get('id'))
      .subscribe(order => this.order = order);
  }
  onFormSubmit(e){
    e.preventDefault();
  }
}
