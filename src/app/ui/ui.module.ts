import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBookComponent } from './components/card-book/card-book.component';
import {MatCardModule} from '@angular/material/card';
import { ModalDetailBookComponent } from './components/modal-detail-book/modal-detail-book.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    CardBookComponent,
    ModalDetailBookComponent
  ],
  exports: [
    CardBookComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class UiModule { }
