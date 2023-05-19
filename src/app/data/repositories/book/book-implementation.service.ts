import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {BookRepositoryMapper} from "./mappers/book-repository.mapper";
import {HttpClient} from "@angular/common/http";
import {BookRepository} from "../../../domain/repositories/book.repository";
import {map, Observable} from "rxjs";
import {BookModel} from "../../../domain/models/book.model";
import {BookEntity} from "./entities/book-entity";

@Injectable({
  providedIn: 'root'
})
/**
 * En este servicio se llama lso endpoints que se van a consumir de la API
 */
export class BookImplementationService extends BookRepository {
  urlApi =  environment.url_api;
  bookMapper = new BookRepositoryMapper();
  constructor(private http: HttpClient) { super(); }

  getBooks(): Observable<BookModel[]> {
    return this.http.get<BookEntity[]>(`${this.urlApi}libros.json`)
      .pipe(map(data => data.map(item => this.bookMapper.mapFrom(item))));
  }
}
