import { Component, OnInit, ViewChild } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) { 
    this.order=new Order();
  }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {

    this.newOreder = !!this.route.snapshot.paramMap.get('id'); 
    if (this.newOreder)
    this.orderService.getOrder(this.route.snapshot.paramMap.get('id'))
      .subscribe(order => {
        this.order = order;
        console.log(this.order);
      });
  }
  onFormSubmit(e){
    console.log(this.order);
    if (!this.newOreder){
      this.orderService.seveOrder(this.order).subscribe(response=>{        
        this.router.navigate(['/']);
      },error=>{}
      )
    }
    else{
      this.orderService.update(this.order).
      subscribe(response=>{        
        this.router.navigate(['/']);
      },error=>{}
      )
    }
  
  e.preventDefault();
  }
  onDelete(){
    this.orderService.delete(this.order).subscribe(response=>{
      this.router.navigate(['/']);
    })
  }
}
