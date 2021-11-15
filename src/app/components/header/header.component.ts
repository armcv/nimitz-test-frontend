import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label:'Scrapper Task',
          icon:'pi pi-fw pi-history',
          routerLink: ['/history']
      },
      {
          label:'Departments',
          icon:'pi pi-fw pi-map',
          routerLink: ['/departments']
      },
      {
          label:'Services Status',
          icon:'pi pi-fw pi-list',
          routerLink: ['/services']
      }
  ];
  }

}
