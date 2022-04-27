import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PeriodicElement, PeriodicProduct, PeriodicCart } from '../models/PeriodicElement';
//essa clase só trata do crud com DB
@Injectable()
export class PeriodicElementService {
    
    elementApiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getElement(api: String): Observable<PeriodicElement[]> {
      return this.http.get<PeriodicElement[]>(`${this.elementApiUrl}/${api}/`);
  }
  createElements(element: PeriodicElement, api: String): Observable<PeriodicElement>{
    return this.http.post<PeriodicElement>(`${this.elementApiUrl}/${api}/`, element);
  }
  editElements(element: PeriodicElement, api: String): Observable<PeriodicElement>{
    return this.http.put<PeriodicElement>(`${this.elementApiUrl}/${api}/${element.id}`, element)
  }
  deleteElements(id: number, api: String): Observable<any>{
    return this.http.delete<any>(`${this.elementApiUrl}/${api}/${id}`);
  }

  //crud do produto
getProduct(api: String): Observable<PeriodicProduct[]> {
  return this.http.get<PeriodicProduct[]>(`${this.elementApiUrl}/${api}/`);
}
createProduct(element: PeriodicProduct, api: String): Observable<PeriodicProduct>{
  return this.http.post<PeriodicProduct>(`${this.elementApiUrl}/${api}/`, element);
}
editProduct(element: PeriodicProduct, api: String): Observable<PeriodicProduct>{
  return this.http.put<PeriodicProduct>(`${this.elementApiUrl}/${api}/${element.id}`, element)
}
deleteProduct(id: number, api: String): Observable<any>{
  return this.http.delete<any>(`${this.elementApiUrl}/${api}/${id}`);
}

  //crud do carrinho
  getCart(api: String): Observable<PeriodicCart[]> {
    return this.http.get<PeriodicCart[]>(`${this.elementApiUrl}/${api}/`);
  }
  createCart(element: PeriodicCart, api: String): Observable<PeriodicCart>{
    return this.http.post<PeriodicCart>(`${this.elementApiUrl}/${api}/`, element);
  }
  editCart(element: PeriodicCart, api: String): Observable<PeriodicCart>{
    return this.http.put<PeriodicCart>(`${this.elementApiUrl}/${api}/${element.id}`, element)
  }
  deleteCart(id: number, api: String): Observable<any>{
    return this.http.delete<any>(`${this.elementApiUrl}/${api}/${id}`);
  }


}