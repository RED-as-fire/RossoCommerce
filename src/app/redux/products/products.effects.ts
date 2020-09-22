import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCommunicationsService } from 'src/app/core/http-communications/http-communications.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Products } from 'src/app/core/models/products.interface';
import { initProduct, retrieveAllProducts } from './products.action';
import { Action } from '@ngrx/store';


@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) {}

  getAllProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(retrieveAllProducts),
    switchMap(() => this.retreiveAllProducts().pipe(
      map((products) => initProduct({products}))

    ))
  ));

  retreiveAllProducts(): Observable<Products[]> {
    return this.http.retrieveGetCall<Products[]>('products');
  }

}
