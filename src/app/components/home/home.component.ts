import {Component, OnInit} from '@angular/core';
import {ViewChild} from "@angular/core";
import {NotificationsComponent} from "../notifications/notifications.component";
import {GlobalService} from "../../services/global.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    @ViewChild('notification') notification: NotificationsComponent;


    constructor(private service: GlobalService) {
    }

    ngOnInit() {


    }



}
