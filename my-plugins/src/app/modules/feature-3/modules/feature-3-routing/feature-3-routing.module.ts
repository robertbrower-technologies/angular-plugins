import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feature3Component } from '../../components/feature3/feature3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '\feature-3',
    pathMatch: 'full'
  },
  {
    path: 'feature-3',
    component: Feature3Component,
    resolve: {  }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Feature3RoutingModule { }