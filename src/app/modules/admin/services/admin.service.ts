import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "../../../auth/services/storage/storage.service";

const BASIC_URL = ["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http: HttpClient) { }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set('Authorization', 'Bearer '+StorageService.getToken());
  }

  postCar(carDto:any):Observable<any>{
    return this.http.post(BASIC_URL+"/api/admin/car", carDto, {
      headers: this.createAuthorizationHeader()});
  }

  getAllCars():Observable<any> {
    return this.http.get(BASIC_URL+"/api/admin/cars", {
      headers: this.createAuthorizationHeader()
    });

  }


}
