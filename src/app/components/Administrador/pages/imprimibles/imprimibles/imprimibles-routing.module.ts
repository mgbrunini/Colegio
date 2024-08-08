import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprimiblesComponent } from './imprimibles.component';

const routes: Routes = [
  {
    path: 'imprimibles',
    component: ImprimiblesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImprimiblesRoutingModule { }
