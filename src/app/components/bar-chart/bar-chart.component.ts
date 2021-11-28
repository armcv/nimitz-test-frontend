import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.sass'],
})
export class BarChartComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  constructor() {}

  ngOnInit(): void {
    this.basicData = {
      labels: [
        'AM',
        'BA',
        'CE',
        'GO',
        'MG',
        'MS',
        'MT',
        'PE',
        'PR',
        'RS',
        'SP',
        'SVAN',
        'SVRS',
        'SVC-AN',
        'SVC-RS',
      ],
      datasets: [
        {
          label: 'Verde',
          backgroundColor: '#4caf50',
          data: [65, 59, 80, 81, 56, 55, 40, 34, 36, 56, 54, 36, 56, 54, 23],
        },
        {
          label: 'Amarelo',
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90, 34, 36, 56, 54, 36, 56, 54, 23],
        },
        {
          label: 'Vermelho',
          backgroundColor: '#e91e63',
          data: [28, 48, 40, 19, 86, 27, 90, 34, 36, 56, 54, 36, 56, 54, 23],
        },
      ],
    };
  }
}
