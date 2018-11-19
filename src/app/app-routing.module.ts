import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeteilsOrderComponent } from './deteils-order/deteils-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [{
        path: '',
        component: OrdersComponent
    },
    {
      path: 'details/:id',
      component: DeteilsOrderComponent
    },
    {
      path: 'create',
      component: DeteilsOrderComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
