import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImpressumComponent } from './impressum.component';


const routes: Routes = [
  { path: '', component: ImpressumComponent }
];

@NgModule({
  declarations: [ImpressumComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ImpressumModule { }
