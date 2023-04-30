import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private readonly apiUrl = 'http://localhost:9000/SpringMVC/servlet/Category/';
  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + 'retrieve-all-Categorys');
  }

  retrieveCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.apiUrl + 'retrieve-Category/' + id);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl + 'add-Category', category);
  }

  removeCategory(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + 'remove-Category/' + id);
  }

  updateCategory(category: Category): Observable<boolean> {
    return this.http.put<boolean>(this.apiUrl + 'update-Category', category);
  }

  affecterProduitACategorie(idCategorie: number, idProduit: number): Observable<void> {
    return this.http.post<void>(this.apiUrl + idCategorie + '/produits/' + idProduit, null);
  }

  getClientIp(): Observable<string> {
    return this.http.get<string>(this.apiUrl + 'client-ip');
  }
}

