import { Component, OnInit } from '@angular/core';
import { ScrapperTasks } from 'src/app/models/scrapper.tasks';
import { ScrapperService } from '../../services/scrapper.service';

@Component({
  selector: 'app-scrapper-task-table',
  templateUrl: './scrapper-task-table.component.html',
  styleUrls: ['./scrapper-task-table.component.sass'],
})
export class ScrapperTaskTableComponent implements OnInit {
  scrapperTasks: ScrapperTasks[] = [];
  first = 0;
  rows = 10;

  constructor(private scrapperService: ScrapperService) {}

  ngOnInit(): void {
    this.scrapperService
      .getScrapperTasks()
      .subscribe((data) => (this.scrapperTasks = data));
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
    return this.scrapperTasks
      ? this.first === this.scrapperTasks.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.scrapperTasks ? this.first === 0 : true;
  }
}
