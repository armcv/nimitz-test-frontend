import { Component, OnInit } from '@angular/core';

import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.sass'],
})
export class DepartmentTableComponent implements OnInit {
  departments: Department[] = [];
  first = 0;
  rows = 10;
  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService
      .getDepartments()
      .subscribe((data) => (this.departments = data));
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.departments
      ? this.first === this.departments.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.departments ? this.first === 0 : true;
  }
}
