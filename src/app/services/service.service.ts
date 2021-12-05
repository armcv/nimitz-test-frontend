import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  endpoint: string;
  constructor(private http: HttpClient) {
    this.endpoint = 'http://localhost:8080/api/services/directory';
  }

  getServices() {
    return this.http.get<Service[]>(this.endpoint);
  }

  getServicesByDepartment(code: string) {
    return this.http.get<Service[]>(this.endpoint, { params: { code } });
  }

  getServicesByDate(date: string) {
    return this.http.get<Service[]>(this.endpoint, { params: { date } });
  }
}
