import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { CartComponent } from './cart/cart.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LazyModule { }
