import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { FacadeComponent } from './components/facade/facade.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [{
  path: 'list',
  component: BookListComponent
},
{
  path: 'facade',
  component: FacadeComponent
},
{
  path: 'report',
  component: ReportComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
