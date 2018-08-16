import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  newP = {
    name: ''
  };
  products: any;
  selected: any;
  constructor(private service: GlobalService) { }

  ngOnInit() {
    this.service.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  select(f: any) {
    this.selected = f;
  }

  delete(f: any) {
    this.service.deleteProducts(f).subscribe((res) => {
      this.ngOnInit();
    })
  }

  create() {
    this.service.createProducts(this.newP).subscribe((res) => {
      this.ngOnInit();
    })
  }

  update() {
    this.service.updateProducts(this.selected).subscribe((res) => {
      this.ngOnInit();
    })
  }
}
