import { createAction, props } from '@ngrx/store';
import { Products } from 'src/app/core/models/products.interface';

export const retrieveAllProducts = createAction('[Product] titoli');
export const initProduct = createAction('[Product] product', props<{products: Products[]}>());
