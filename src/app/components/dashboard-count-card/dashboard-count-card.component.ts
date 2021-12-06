import { Component, Input, OnInit } from '@angular/core';

import { CountStatus } from 'src/app/models/count.status';
import { CountStatusService } from 'src/app/services/count-status.service';

@Component({
  selector: 'app-dashboard-count-card',
  templateUrl: './dashboard-count-card.component.html',
  styleUrls: ['./dashboard-count-card.component.sass'],
})
export class DashboardCountCardComponent implements OnInit {
  @Input() status!: string;
  first = 0;
  rows = 1;
  totalRecords = 27;

  statusCount: CountStatus[] = [];
  selectedDepartment: string | undefined;
  selectedCount: number | undefined;

  constructor(
    private statusCountService: CountStatusService
  ) {}

  ngOnInit(): void {
    this.statusCountService
      .getStatusCountByStatus(this.status)
      .subscribe((response) => {
        this.statusCount = response;
        this.totalRecords = response.length;
        this.selectedDepartment = response[this.first]['name'];
        this.selectedCount = response[this.first]['count'];
      });
  }

  paginate(event: any) {
    this.selectedDepartment = this.statusCount[event.page]['name'];
    this.selectedCount = this.statusCount[event.page]['count'];
  }
}
