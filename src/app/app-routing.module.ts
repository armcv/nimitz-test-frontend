import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DepartmentComponent } from './components/department/department.component';
import { HistoryComponent } from './components/history/history.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'services', component: ServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
