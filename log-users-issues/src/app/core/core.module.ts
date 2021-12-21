import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ModalComponent,
    ProgressBarComponent
  ]
})
export class CoreModule { }
