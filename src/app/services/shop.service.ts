import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Shop } from '../models/shop';
import { Tva } from '../models/tva';



@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'http://localhost:9000/SpringMVC/servlet/Shop/';
  private readonly getLocationUrl = this.baseUrl + '/shop/location';

  getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${this.baseUrl}/retrieve-all-Shops`);
  }

  getShopById(id: number): Observable<Shop> {
    return this.http.get<Shop>(`${this.baseUrl}/retrieve-Shop/${id}`);
  }

  addShop(shop: Shop): Observable<Shop> {
    return this.http.post<Shop>(`${this.baseUrl}/add-Shop`, shop);
  }

  removeShop(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove-Shop/${id}`);
  }

  updateShop(shop: Shop): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/update-Shop`, shop);
  }

  affecterProduitsABoutique(idShop: number, idProduits: number[]): Observable<Shop> {
    return this.http.put<Shop>(`${this.baseUrl}/${idShop}/produits`, idProduits);
  }

  getLocation(address?: string): Observable<string[]> {
    const url = `${this.getLocationUrl}?address=${address}`;
    return this.http.get<string[]>(url);
  }

  getShopsLocations(name: string): Observable<string[]> {
    return this.http.get<any>(`${this.baseUrl}/shops/locations`, { params: { name } })
      .pipe(map((response) => response.locations));
  }

  getBeneficeBrut(idShop: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/beneficeBrut/${idShop}`);
  }

  addTva(tva: Tva): Observable<Tva> {
    return this.http.post<Tva>(`${this.baseUrl}/add-TVA`, tva);
  }

  tauxTVA(idShop: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/tauxTVA/${idShop}`);
  }

  valeurbeneficeApresTva(idShop: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/valeurbeneficeApresTva/${idShop}`);
  }

  getRentableShop(): Observable<Shop> {
    return this.http.get<Shop>(`${this.baseUrl}/shop-plusrentable`);
  }

  getNonRentableShop(): Observable<Shop> {
    return this.http.get<Shop>(`${this.baseUrl}/shop-Mrentable`);
  }

  getStockStatistics(): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(`${this.baseUrl}/statistiques`);
  }


}
