import { Action, createReducer, on } from '@ngrx/store';
import { Products } from 'src/app/core/models/products.interface';
import { initProduct } from './products.action';

export interface ProductsState {
  products: Products[];
}

export const initialState: ProductsState = {
  products: []
};

export const productsReducer = createReducer(
  initialState,
  on(initProduct, (state, { products }) => ( { ...state, products } )),
);

export function reducer(state: ProductsState | undefined, action: Action) {
  return productsReducer(state, action);
}
