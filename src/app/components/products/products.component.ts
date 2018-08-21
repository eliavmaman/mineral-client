import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../services/global.service";

declare var $: any;

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

    constructor(private service: GlobalService) {
    }

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
        let existed = this.products.find((f) => {
            return this.newP.name == f.name;
        });
        if (existed) {
            alert('Name already exist, please select another');
            return false;
        }
        this.service.createProducts(this.newP).subscribe((res) => {
            this.ngOnInit();
            $('#createTrigger').click();
            alert('Action completed successfully');
        })
    }

    update() {
        this.service.updateProducts(this.selected).subscribe((res) => {
            this.ngOnInit();
            $('#editTrigger').click();
            alert('Action completed successfully');
        })
    }
}
