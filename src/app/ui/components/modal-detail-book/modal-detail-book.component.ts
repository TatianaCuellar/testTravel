import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BookModel} from "../../../domain/models/book.model";

@Component({
  selector: 'app-modal-detail-book',
  templateUrl: './modal-detail-book.component.html',
  styleUrls: ['./modal-detail-book.component.scss']
})
export class ModalDetailBookComponent implements OnInit {

  responseDetailBook!: BookModel;
  constructor(public dialogRef: MatDialogRef<ModalDetailBookComponent>, @Inject(MAT_DIALOG_DATA) public data: BookModel) {
    this.responseDetailBook = data;
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
