import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SubhomeComponent } from './subhome/subhome.component';

@NgModule({
  declarations: [HomeComponent, SubhomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
