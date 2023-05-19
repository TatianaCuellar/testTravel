import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookRepository} from "../domain/repositories/book.repository";
import {GetBooksUseCase} from "../domain/usecases/book/get-books.usecase";
import {HttpClientModule} from "@angular/common/http";
import {BookImplementationService} from "./repositories/book/book-implementation.service";


/**
 * Aquí vamos proporcionar todos los casos de uso del modulo de datos
 * @param bookRepo
 * @constructor
 */

const GetBooksUseCaseFactory =  (bookRepo: BookRepository) => new GetBooksUseCase(bookRepo);
export const GetBooksUseCaseProvider = {
  provide: GetBooksUseCase,
  useFactory: GetBooksUseCaseFactory,
  deps: [BookRepository],
};



@NgModule({
  providers: [
    GetBooksUseCaseProvider,
    { provide: BookRepository, useClass: BookImplementationService }],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DataModule { }
