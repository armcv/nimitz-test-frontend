import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Department } from '../models/department';

@Injectable()
export class DepartmentService {

    constructor(private http: HttpClient) { }

    getDepartments() {
        return this.http.get<any>('http://localhost:8080/api/departments')
        .toPromise()
        .then(res => <Department[]>res)
        .then(data => { return data; });
    }

}