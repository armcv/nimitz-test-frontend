import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountStatus } from '../models/count.status';

@Injectable({
  providedIn: 'root',
})
export class CountStatusService {
  endpoint: string;
  constructor(private http: HttpClient) {
    this.endpoint = 'http://localhost:8080/api/services/count';
  }

  getStatusCount() {
    return this.http.get<CountStatus[]>(this.endpoint);
  }

  getStatusCountByStatus(status: string) {
    return this.http.get<CountStatus[]>(this.endpoint, { params: { status } });
  }

  getStatusCountByCode(code: string) {
    return this.http.get<CountStatus[]>(this.endpoint, { params: { code } });
  }
}
