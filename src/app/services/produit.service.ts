import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:9000/SpringMVC/servlet/Product';

  getProducts(currency?: string): Observable<Produit[]> {
    const url = `http://localhost:9000/SpringMVC/servlet/Product}/retrieve-all-Products`;
    const params: any = {};
    if (currency) {
      params.currency = currency;
    }
    return this.http.get<Produit[]>(url, { params });
  }
  
  retrieveProduct(productId: number): Observable<Produit> {
    const url = `${this.apiUrl}/retrieve-Product/${productId}`;
    return this.http.get<Produit>(url);
  }
  
  addProduct(name: string, description: string, price: number, stock: number, idCategorie: number, image: File): Observable<Produit> {
    const url = `${this.apiUrl}/add-product/${idCategorie}`;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', String(price));
    formData.append('stock', String(stock));
    formData.append('image', image, image.name);
    return this.http.post<Produit>(url, formData);
  }
  
  removeProduct(productId: number): Observable<void> {
    const url = `${this.apiUrl}/remove-Product/${productId}`;
    return this.http.delete<void>(url);
  }
  
  updateProduct(product: Produit): Observable<boolean> {
    const url = `${this.apiUrl}/update-Product`;
    return this.http.put<boolean>(url, product);
  }
  
  // convertCurrencies(conversionCurrency: ConversionCurrency): Observable<number> {
  //   const url = `${this.apiUrl}/currency-converter`;
  //   return this.http.post<number>(url, conversionCurrency);
  // }
  
  // getAllCurrencies(): Observable<Currency[]> {
  //   const url = `${this.apiUrl}/currencies`;
  //   return this.http.get<Currency[]>(url);
  // }
  
  promoteProduct(id: number, pourcentage: number): Observable<void> {
    const url = `${this.apiUrl}/promotion/${id}/${pourcentage}`;
    return this.http.put<void>(url, null);
  }
  
  getClientLocation(): Observable<{country: string, city: string}> {
    const url = `${this.apiUrl}/client-location`;
    return this.http.get<{country: string, city: string}>(url);
  }
  
}
