import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2Component } from './components/feature2/feature2.component';
import { Feature2RoutingModule } from './modules/feature-2-routing/feature-2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Feature2RoutingModule
  ],
  declarations: [Feature2Component],
  exports: [Feature2Component]
})
export class Feature2Module { }
