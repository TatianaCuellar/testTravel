import {Mapper} from "../../../../base/utils/mapper";
import {BookEntity} from "../entities/book-entity";
import {BookModel} from "../../../../domain/models/book.model";

/**
 * Aquí mapearemos las propiedades del modelo y la entidad de book
 */
export class BookRepositoryMapper extends Mapper<BookEntity, BookModel> {
  mapFrom(param: BookEntity) {
    return {
      isbn: param.ISBN,
      title: param.titulo,
      synopsis: param.sinopsis,
      pages: param.n_pagpinas,
      editorial: {
        name: param.editorial.nombre,
        site: param.editorial.sede
      },
      author: {
        name: param.autor.nombre,
        last_name: param.autor.apellido
      }
    };
  }

  mapTo(param: BookModel) {
    return {
      ISBN: param.isbn,
      titulo: param.title,
      sinopsis: param.synopsis,
      n_pagpinas: param.pages,
      editorial: {
        nombre: param.editorial.name,
        sede: param.editorial.site
      },
      autor: {
        nombre: param.author.name,
        apellido: param.author.last_name
      }
    }
  }
}
