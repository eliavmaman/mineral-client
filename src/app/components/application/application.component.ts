import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../services/global.service";

declare var $: any;

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

    newAP = {
        name: ''
    };
    applications: any;
    families: any;
    products: any;
    classifications: any;
    selected: any;

    constructor(private service: GlobalService) {
    }

    ngOnInit() {
        this.service.getApplications().subscribe((res) => {
            this.applications = res;
        });

        this.service.getFamilies().subscribe((res) => {
            this.families = res;
        });
        this.service.getProducts().subscribe((res) => {
            this.products = res;
        });
        this.service.getClassification().subscribe((res) => {
            this.classifications = res;
        });

    }

    select(f: any) {
        this.selected = f;
    }

    delete(f: any) {
        this.service.deleteApplications(f).subscribe((res) => {
            this.ngOnInit();
        })
    }

    create() {
        this.service.createApplications(this.newAP).subscribe((res) => {
            this.ngOnInit();
            $('#createTrigger').click();
        })
    }

    update() {
        this.service.updateApplications(this.selected).subscribe((res) => {
            this.ngOnInit();
            $('#editTrigger').click();
        })
    }
}
