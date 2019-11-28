import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature2Component } from '../../components/feature2/feature2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '\feature-2',
    pathMatch: 'full'
  },
  {
    path: 'feature-2',
    component: Feature2Component,
    resolve: {  }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }