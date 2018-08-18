import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Subject} from "rxjs/Subject";

import {Http, Response, Headers} from "@angular/http";


@Injectable()
export class GlobalService {

    onProductAddCallback: Subject<any> = new Subject<any>();
    onProductAddCallback$ = this.onProductAddCallback.asObservable();

    onUserLoggedCallback: Subject<any> = new Subject<any>();
    onUserLoggedCallback$ = this.onUserLoggedCallback.asObservable();

    constructor(private http: Http) {
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }


    signup(email, password) {

        var data = {email: email, password: password};
        return this.http.post('http://localhost:3000/api/register', data).map(res => res.json());

    }

    signin(email, password) {

        var data = {email: email, password: password};
        return this.http.post('http://localhost:3000/api/login', data).map(res => res.json());
    }

    // Families
    getFamilies() {
        return this.http.get('http://localhost:3000/api/family').map(res => res.json());
    }

    createFamiliy(c: any) {
        return this.http.post('http://localhost:3000/api/family', c).map(res => res.json());
    }

    updateFamiliy(c: any) {
        return this.http.put('http://localhost:3000/api/family/' + c._id, c).map(res => res.json());
    }

    deleteFamiliy(c: any) {
        return this.http.delete('http://localhost:3000/api/family/' + c._id, c).map(res => res.json());
    }


    //PRODUCTS
    getProducts() {
        return this.http.get('http://localhost:3000/api/products').map(res => res.json());
    }

    createProducts(c: any) {
        return this.http.post('http://localhost:3000/api/Products', c).map(res => res.json());
    }

    updateProducts(c: any) {
        return this.http.put('http://localhost:3000/api/Products/' + c._id, c).map(res => res.json());
    }

    deleteProducts(c: any) {
        return this.http.delete('http://localhost:3000/api/Products/' + c._id, c).map(res => res.json());
    }


    // Families
    getFamiliyProducts() {
        return this.http.get('http://localhost:3000/api/familyProduct').map(res => res.json());
    }

    createFamilyProduct(c: any) {
        return this.http.post('http://localhost:3000/api/familyProduct', c).map(res => res.json());
    }

    updateFamilyProduct(c: any) {
        return this.http.put('http://localhost:3000/api/familyProduct/' + c._id, c).map(res => res.json());
    }

    deleteFamilyProduct(c: any) {
        return this.http.delete('http://localhost:3000/api/familyProduct/' + c._id, c).map(res => res.json());
    }

// Usages
    getClassification() {
        return this.http.get('http://localhost:3000/api/classification').map(res => res.json());
    }

    createClassification(c: any) {
        return this.http.post('http://localhost:3000/api/classification', c).map(res => res.json());
    }

    updateClassification(c: any) {
        return this.http.put('http://localhost:3000/api/classification/' + c._id, c).map(res => res.json());
    }

    deleteClassification(c: any) {
        return this.http.delete('http://localhost:3000/api/classification/' + c._id, c).map(res => res.json());
    }

//Applications
    getApplications() {
        return this.http.get('http://localhost:3000/api/applications').map(res => res.json());
    }

    createApplications(c: any) {
        return this.http.post('http://localhost:3000/api/applications', c).map(res => res.json());
    }

    updateApplications(c: any) {
        return this.http.put('http://localhost:3000/api/applications/' + c._id, c).map(res => res.json());
    }

    deleteApplications(c: any) {
        return this.http.delete('http://localhost:3000/api/applications/' + c._id, c).map(res => res.json());
    }

}
