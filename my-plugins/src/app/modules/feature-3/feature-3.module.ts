import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature3Component } from './components/feature3/feature3.component';
import { Feature3RoutingModule } from './modules/feature-3-routing/feature-3-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Feature3RoutingModule
  ],
  declarations: [Feature3Component],
  exports: [Feature3Component]
})
export class Feature3Module { }
