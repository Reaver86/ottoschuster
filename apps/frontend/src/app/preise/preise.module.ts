import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PreiseComponent } from './preise.component';


const routes: Routes = [
  { path: '', component: PreiseComponent }
];

@NgModule({
  declarations: [PreiseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PreiseModule { }
