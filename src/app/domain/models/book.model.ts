/**
 * Este es el modelo book con el que se trabajara dentro de la aplicación
 */
import {EditorialModel} from "./editorial.model";
import {AuthorModel} from "./author.model";

export interface BookModel {
  isbn: string;
  title: string;
  synopsis: string;
  pages: number;
  editorial: EditorialModel;
  author: AuthorModel;
}
