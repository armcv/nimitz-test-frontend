import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { ServiceService } from 'src/app/services/service.service';
import { SelectItem } from 'primeng/api';
import { Department } from '../../models/department';
import { Service } from '../../models/service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.sass']
})
export class ServiceComponent implements OnInit {

  departments: Department[] = [];
  services: Service[] = [] ;

  constructor(private departmentService: DepartmentService, private serviceService: ServiceService) {}

  async ngOnInit(): Promise<void> {
    this.departmentService.getDepartments().subscribe(response => this.departments = response);
    this.serviceService.getServices().subscribe(response => this.services = response);
  }

  onChange(event: { value: string; }) {
    const value = event.value;
    console.log(value);
    this.serviceService.getServicesByDepartment(value).subscribe(response => this.services = response);
  }

  onSelectDate(event: Date){
    const date = event.toLocaleString("fr-CA", { year: "numeric", month: "2-digit",   day: "2-digit" });
    this.serviceService.getServicesByDate(date).subscribe(response => this.services = response);
  }

  onPage(event: { value: any; }) {
    console.log(event);
  }

}
