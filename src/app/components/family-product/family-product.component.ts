import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../services/global.service";
declare var $:any;
@Component({
  selector: 'app-family-product',
  templateUrl: './family-product.component.html',
  styleUrls: ['./family-product.component.css']
})
export class FamilyProductComponent implements OnInit {

  newFP = {
    name: ''
  };
  familiesProducts:any;
  families: any;
  products: any;
  selected: any;
  constructor(private service: GlobalService) { }

  ngOnInit() {
    this.service.getFamiliyProducts().subscribe((res) => {
      this.familiesProducts = res;
    });

    this.service.getFamilies().subscribe((res) => {
      this.families = res;
    });
    this.service.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  select(f: any) {
    this.selected = f;
  }

  delete(f: any) {
    this.service.deleteFamilyProduct(f).subscribe((res) => {
      this.ngOnInit();
    })
  }

  create() {
    this.service.createFamilyProduct(this.newFP).subscribe((res) => {
      this.ngOnInit();
        $('#createTrigger').click();
    })
  }

  update() {
    this.service.updateFamilyProduct(this.selected).subscribe((res) => {
      this.ngOnInit();
        $('#editTrigger').click();
    })
  }

}
