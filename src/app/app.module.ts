import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';

import {GlobalService} from "./services/global.service";
import {ModalModule} from "ngx-bootstrap";
import * as $ from 'jquery';


import {NotificationsComponent} from './components/notifications/notifications.component';


import {HomeComponent} from './components/home/home.component';
//import {BookComponent} from "./components/book/book.component";

//import {AddUpdateBookComponent} from "./components/add-update-book/add-update-book.component";
import {A2Edatetimepicker} from "ng2-eonasdan-datetimepicker";
import {TitlePipe} from './pipes/title/title.pipe';
import { ConfirmationModalComponent } from './components/confirmation-dialog/confirmation-dialog.component';

import {Authervice} from "./services/auth.service";
import { ProductsComponent } from './components/products/products.component';





import { FamilyComponent } from './components/family/family.component';
import { FamilyProductComponent } from './components/family-product/family-product.component';
import { UsageComponent } from './components/usage/usage.component';



const appRoutes: Routes = [
    {path: '', component: HomeComponent},

    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'family', component: FamilyComponent},
    {path: 'familyProduct', component: FamilyProductComponent},
    {path: 'usage', component: UsageComponent},

];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        NotificationsComponent,
       // BookComponent,
        HomeComponent,
        //AddUpdateBookComponent,
        TitlePipe,
        ConfirmationModalComponent,

        ProductsComponent,



        FamilyComponent,
        FamilyProductComponent,
        UsageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        ModalModule.forRoot(),
        A2Edatetimepicker
    ],
    providers: [
        GlobalService,
        Authervice
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
