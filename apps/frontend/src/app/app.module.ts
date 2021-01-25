import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiLogoModule } from '@ottoschuster/shared/ui/logo';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'kontakt',
    loadChildren: () =>
      import('./kontakt/kontakt.module').then((m) => m.KontaktModule),
  },
  {
    path: 'preise',
    loadChildren: () =>
      import('./preise/preise.module').then((m) => m.PreiseModule),
  },
  {
    path: 'impressum',
    loadChildren: () =>
      import('./impressum/impressum.module').then((m) => m.ImpressumModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ScullyLibModule,
    RouterModule.forRoot(routes),
    SharedUiLogoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
