import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';

import { DepartmentComponent } from './components/department/department.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

import { DepartmentService } from './services/department.service';
import { HistoryComponent } from './components/history/history.component';
import { ScrapperComponent } from './components/scrapper/scrapper.component';
import { ServiceComponent } from './components/service/service.component'

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    HomeComponent,
    HeaderComponent,
    HistoryComponent,
    ScrapperComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    HttpClientModule,
    DataViewModule,
    DropdownModule,
    CalendarModule,
    ToolbarModule,
    DividerModule
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
