import { Observable } from 'rxjs';


/**
 * Este es el caso de uso global, aquí van a apasar todos los casos de usos declarados en la carpeta usecases
 */
export interface UseCase<S, T> {
  execute(params: S): Observable<T>;
}
