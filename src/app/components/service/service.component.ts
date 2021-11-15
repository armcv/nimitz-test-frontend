import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { ServiceService } from 'src/app/services/service.service';
import { SelectItem } from 'primeng/api';
import { Department } from '../../models/department';
import { Service } from '../../models/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.sass']
})
export class ServiceComponent implements OnInit {

  departments: Department [] = [];
  services: Service [] = [];

  constructor(private departmentService: DepartmentService, private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().then(data => this.departments = data);
    this.serviceService.getServices().then(data => this.services = data);
  }

  onChange(event: { value: any; }) {
    const value = event.value;
    this.serviceService.getServicesByDepartment(value).then(data => this.services = data);
    console.log(value);
  }

  onPage(event: { value: any; }) {
    console.log(event);
  }

}
