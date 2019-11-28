import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1Component } from './components/feature1/feature1.component';
import { Feature1RoutingModule } from './modules/feature-1-routing/feature-1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Feature1RoutingModule
  ],
  declarations: [Feature1Component],
  exports: [Feature1Component]
})
export class Feature1Module { }
