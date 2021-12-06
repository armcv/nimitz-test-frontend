import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  verde = 'Verde';
  amarelo = 'Amarelo';
  vermelho = 'Vermelho';
  
  constructor() {}

  ngOnInit(): void {}
}
