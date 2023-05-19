import {Component, OnInit} from '@angular/core';
import {GetBooksUseCase} from "./domain/usecases/book/get-books.usecase";
import {BookModel} from "./domain/models/book.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test_travel';
  listBooks: BookModel[] = [];

  constructor(private getBooksUseCase: GetBooksUseCase) { }

  ngOnInit(): void {
    // Llamado del enpoint que trae la información de todos los libros
    this.getBooksUseCase.execute().subscribe(listBooks => this.listBooks = listBooks);
  }
}
