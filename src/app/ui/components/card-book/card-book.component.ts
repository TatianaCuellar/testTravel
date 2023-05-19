import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from "../../../domain/models/book.model";
import {MatDialog} from "@angular/material/dialog";
import {ModalDetailBookComponent} from "../modal-detail-book/modal-detail-book.component";

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss']
})
export class CardBookComponent implements OnInit {


  @Input() responseBook!: BookModel;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /**
   * Metodo para abrir la modal que muestra el detalle de un libro
   */
  openModal() {
    this.dialog.open(ModalDetailBookComponent, {
      width: '60vw',
      data: this.responseBook
    });
  }

}
