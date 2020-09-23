import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {

  constructor(private store: Store) { }

  getAllProducts() {
    // this.store.dispatch(getAllProducts());
  }
}
