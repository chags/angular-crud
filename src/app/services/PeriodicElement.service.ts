import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PeriodicElement } from '../models/PeriodicElement';
//essa clasee só trata do crud com DB
@Injectable()
export class PeriodicElementService {
    elementApiUrl = 'http://localhost:3000/usuarios';
  constructor(private http: HttpClient) { }

  getElement(): Observable<PeriodicElement[]> {
      return this.http.get<PeriodicElement[]>(this.elementApiUrl);
  }
  createElements(element: PeriodicElement): Observable<PeriodicElement>{
    return this.http.post<PeriodicElement>(this.elementApiUrl, element);
  }
  editElements(element: PeriodicElement): Observable<PeriodicElement>{
    return this.http.put<PeriodicElement>(`${this.elementApiUrl}/${element.id}`, element)
  }
  deleteElements(id: number): Observable<any>{
    return this.http.delete<any>(`${this.elementApiUrl}/${id}`);
  }
}