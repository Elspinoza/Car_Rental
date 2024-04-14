import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../../../auth/services/storage/storage.service";
import {Observable} from "rxjs";

const BASIC_URL = ["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set('Authorization', 'Bearer '+StorageService.getToken());
  }

  getAllCars():Observable<any> {
    return this.http.get(BASIC_URL+"/api/customer/cars", {
      headers: this.createAuthorizationHeader()
    });
  }

  getCarsById(carId: number):Observable<any> {
    return this.http.get(BASIC_URL+"/api/customer/car/"+carId, {
      headers: this.createAuthorizationHeader()
    });
  }


}
