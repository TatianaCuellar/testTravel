import {EditorialEntity} from "./editorial-entity";
import {AuthorEntity} from "./author-entity";

/**
 * Este es el modelo que viene del backend
 */
export interface BookEntity {
  ISBN: string;
  titulo: string;
  sinopsis: string;
  n_pagpinas: number;
  editorial: EditorialEntity;
  autor: AuthorEntity;
}
