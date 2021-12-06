import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScrapperTasks } from '../models/scrapper.tasks';

@Injectable({
  providedIn: 'root',
})
export class ScrapperService {
  endpoint: string;
  
  constructor(private http: HttpClient) {
    this.endpoint = "http://localhost:8080/api/scrapper";
  }

  getScrapperTasks() {
    return this.http.get<ScrapperTasks[]>(this.endpoint);
  }

  getTotalTasks() {
    return this.http
      .get<any>(`http://localhost:8080/api/scrapper/count`)
      .toPromise()
      .then((res) => <number>res)
      .then((data) => {
        return data;
      });
  }
}
