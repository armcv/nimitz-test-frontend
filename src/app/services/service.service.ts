import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/api/services/directory'
  }

  getServices() {
    return this.http.get<Service[]>(this.baseUrl);
  }

  getServicesByDepartment(code: string) {
    return this.http.get<Service[]>(this.baseUrl, { params: {code } });
  }

  getServicesByDate(date: string) {
    return this.http
      .get<any>(`${this.baseUrl}?verificationDate=${date}`)
      .toPromise()
      .then((res) => <Service[]>res)
      .then((data) => {
        return data;
      });
  }
}
