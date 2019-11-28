import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '\feature-1',
    pathMatch: 'full'
  },
  {
    path: 'feature-1',
    loadChildren: '../feature-1/feature-1.module#Feature1Module',
    resolve: {  }
  },
  {
    path: 'feature-2',
    loadChildren: '../feature-2/feature-2.module#Feature2Module',
    resolve: {  }
  },
  {
    path: 'feature-3',
    loadChildren: '../feature-3/feature-3.module#Feature3Module',
    resolve: {  }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }