import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxNumberBoxModule } from 'devextreme-angular/ui/number-box';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { HttpClientModule }    from '@angular/common/http'
import { OrdersComponent } from './orders/orders.component';
import { DxMenuModule } from 'devextreme-angular/ui/menu';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { MenuComponent } from './shared/components/menu/menu.component';
import { DeteilsOrderComponent } from './deteils-order/deteils-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
// /import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    MenuComponent,
    DeteilsOrderComponent,
    NewOrderComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule, DxNumberBoxModule, DxDataGridModule, DxFormModule,DxButtonModule, DxToolbarModule, DxPopupModule, DxTextBoxModule, DxCheckBoxModule, DxSelectBoxModule, DxMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
