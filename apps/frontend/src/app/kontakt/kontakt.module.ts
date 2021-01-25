import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KontaktComponent } from './kontakt.component';


const routes: Routes = [
  { path: '', component: KontaktComponent }
];

@NgModule({
  declarations: [KontaktComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class KontaktModule { }
