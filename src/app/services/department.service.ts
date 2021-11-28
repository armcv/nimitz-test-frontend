import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Department } from '../models/department';

@Injectable()
export class DepartmentService {
    baseUrl: string;

    constructor(private http: HttpClient) { 
        this.baseUrl = 'http://localhost:8080/api/departments';
    }

    getDepartments() {
        return this.http.get<Department[]>(this.baseUrl);
    }

}