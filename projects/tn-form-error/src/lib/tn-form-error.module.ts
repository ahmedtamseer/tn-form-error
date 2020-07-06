import { NgModule } from '@angular/core';
import { TnFormErrorComponent } from './tn-form-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TnFormErrorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [TnFormErrorComponent]
})
export class TnFormErrorModule { }
