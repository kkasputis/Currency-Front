import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameListComponent } from './name-list/name-list.component';


const routes: Routes = [
    {
      path: '',
      component: NameListComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
