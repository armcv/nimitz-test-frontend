import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Service } from '../models/service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/api/servicess'
  }

  getServices() {
    
    return this.http
      .get<any>(this.baseUrl)
      .toPromise()
      .then((res) => <Service[]>res)
      .then((data) => {
        return data;
      });
  }

  getServicesByDepartment(code: string) {
  
    return this.http
      .get<any>(`${this.baseUrl}?code=${code}`)
      .toPromise()
      .then((res) => <Service[]>res)
      .then((data) => {
        return data;
      });
  }
}
