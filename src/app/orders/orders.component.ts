import { Component, ViewChild, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Order } from '../Order';

import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit  {
    popupModal: boolean;
    popupUpdate: boolean;
    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
    columns: any;
    dataSource: any;
    isReady: boolean;
    taskSubject: string;
    taskDetailsHtml: SafeHtml;
    taskStatus: string;
    taskProgress: string;
    focusedRowKey: number;
    Orders: Order[];
    order: Order;
    constructor(
        private router: Router,
        private orderService: OrderService,
        private sanitizer: DomSanitizer,
    ) {
        this.order=new Order();
        
    }

    clickRow(e){
        this.router.navigate(['/details/'+e.data.id])
    }
    onFocusedRowChanging(e) {
        
    console.log('onFocusedRowChanging',e);
        var rowsCount = e.component.getVisibleRows().length,
            pageCount = e.component.pageCount(),
            pageIndex = e.component.pageIndex();

        if(e.event.key && e.prevRowIndex === e.newRowIndex) {
            if(e.newRowIndex === rowsCount - 1 && pageIndex < pageCount - 1) {
                e.component.pageIndex(pageIndex + 1).done(function() {
                    e.component.option("focusedRowIndex", 0);
                });
            } else if(e.newRowIndex === 0 && pageIndex > 0) {
                e.component.pageIndex(pageIndex - 1).done(function() {
                    e.component.option("focusedRowIndex", rowsCount - 1);
                });
            }
        }
        
    this.popupModal=true;
    }

    onFocusedRowChanged(e) {
    console.log('onFocusedRowChanged',e);
    console.log(this.order);
    this.order=<Order>(e.row.data);
    console.log(this.order);
    

    }
    ngOnInit() {
        this.orderService.getOrders().subscribe(response=>{
            this.Orders=response;
        })
    }
    clickButton(ord: Order){
        this.popupModal=false;    
        this.popupUpdate=true;

    }
    addOders(){
        this.router.navigate(['/create'])
    }
}




