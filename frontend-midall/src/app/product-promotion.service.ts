import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductPromotion } from './promotions/ProductPromotion';
import { Observable } from 'rxjs';
import { Product } from './products/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductPromotionService {

  constructor(private http : HttpClient) { }

  insert( productPromotion : ProductPromotion) : Observable<ProductPromotion>{
    return this.http.post<ProductPromotion>('http://localhost:8080/product-promotions', productPromotion)
  }

  update(id : number, productPromotion : ProductPromotion) : Observable<ProductPromotion>{
    return this.http.put<ProductPromotion>(`http://localhost:8080/product-promotions/${id}`, productPromotion)
  }

  getAll() : Observable<ProductPromotion[]> {
    return this.http.get<ProductPromotion[]>('http://localhost:8080/product-promotions/list')
  }

  getPromotionById(id:number) : Observable<ProductPromotion>{

    return this.http.get<ProductPromotion>(`http://localhost:8080/product-promotions/${id}`)

  }

  delete(productPromotion : ProductPromotion) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/product-promotions/${productPromotion.id}`)
  }

}
