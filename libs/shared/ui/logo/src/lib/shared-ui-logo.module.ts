import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiLogoComponent } from './shared-ui-logo.component';

@NgModule({
  declarations: [SharedUiLogoComponent],
  imports: [CommonModule],
  exports: [SharedUiLogoComponent],
})
export class SharedUiLogoModule {}
