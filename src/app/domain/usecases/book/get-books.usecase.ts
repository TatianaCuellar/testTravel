import {BookModel} from "../../models/book.model";
import {Observable} from "rxjs";
import {BookRepository} from "../../repositories/book.repository";
import {UseCase} from "../../base/use-case";


/**
 * Este es el caso de uso para obtener todos los libros
 */
export class GetBooksUseCase implements UseCase<void, BookModel[]> {
  constructor(private bookRepository: BookRepository) { }
  execute(): Observable<BookModel[]> {
    return this.bookRepository.getBooks();
  }
}
