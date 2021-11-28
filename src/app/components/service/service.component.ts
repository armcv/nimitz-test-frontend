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
    this.serviceService.getServicesByDepartment(value).subscribe(response => this.services = response);
    console.log(value);
  }

  onSelectDate(event: any){
    const value = event;
    //this.serviceService.getServicesByDepartment(value).then(data => this.services = data);
    console.log(value);
  }

  onPage(event: { value: any; }) {
    console.log(event);
  }

}
