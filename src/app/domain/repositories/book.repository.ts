import {BookModel} from "../models/book.model";
import {Observable} from "rxjs";

/**
 * Aquí se definen todas las acciones que necesitemos del modelo book
 */
export abstract class BookRepository {
  abstract getBooks(): Observable<BookModel[]>;
}
