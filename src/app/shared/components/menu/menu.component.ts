import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';

class Product {
    id: string;
    name: string;
    iconSrc?: string;
    price?: number;
    disabled?: boolean;
    items?: Product[];
  }
  var products: Product[] = [{
    id: "1",
    name: "Заказы",
    
  }
   ];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})



export class MenuComponent implements OnInit {
  
  products: Product[];
  showSubmenuModes: any;
  showFirstSubmenuModes: any;
  currentProduct: Product;

  constructor(
      private router: Router) {
      this.products = products;
      this.showSubmenuModes = [{
          name: "onHover",
          delay: { show: 0, hide: 500 }
      }, {
          name: "onClick",
          delay: { show: 0, hide: 300 }
      }];
      this.showFirstSubmenuModes = this.showSubmenuModes[1];
  }
  itemClick(data) {
    console.log(data);

    console.log(data.itemData.name);
        let item = data.itemData;
        if(data.itemData.id==1){
            this.router.navigate(['/'])
            }
        if(item.price) {
            this.currentProduct = item;
        }
  }

  ngOnInit() {
  }

}
