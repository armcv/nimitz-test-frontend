import { Component, OnInit } from '@angular/core';
import { ScrapperTasks } from 'src/app/models/scrapper.tasks';
import { ScrapperService } from '../../services/scrapper.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  scrapperTasks: ScrapperTasks[] = [];
  constructor(private scrapperService: ScrapperService) { }

  ngOnInit(): void {
    this.scrapperService.getScrapperTasks().then(data => this.scrapperTasks = data);
  }

}
