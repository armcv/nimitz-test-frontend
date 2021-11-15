import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScrapperTasks } from '../models/scrapper.tasks';

@Injectable({
  providedIn: 'root'
})
export class ScrapperService {

  constructor(private http: HttpClient) { }

  getScrapperTasks() {
      return this.http.get<any>('http://localhost:8080/api/scrapper')
      .toPromise()
      .then(res => <ScrapperTasks[]>res)
      .then(data => { return data; });
  }
}
