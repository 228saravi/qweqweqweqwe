import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular/ui/form';
@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {


  ngOnInit() {
  }

  @ViewChild(DxFormComponent) myform: DxFormComponent;
  rules: Object;

  constructor() {
      this.rules = { 'X': /[02-9]/ };
  }

  ngAfterViewInit() {
      this.myform.instance.validate()
  }
}
