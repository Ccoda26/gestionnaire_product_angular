// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3333'; // Remplacez par l'URL de votre backend AdonisJS

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getCSRFToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/csrf-token`, { observe: 'response' });
  }

  getProducts() {
    return this.http.get<any[]>(`${this.apiUrl}/product`);
  }

   // Méthode pour récupérer les informations actuelles du produit par ID
   getProductById(productId: number): Observable<any> {
    const url = `${this.apiUrl}/product/${productId}`;
    return this.http.get<any>(url);
  }


  // Méthode pour mettre à jour les informations du produit
  updateProduct(productId: number, productData: any): Observable<any> {
    const url = `${this.apiUrl}/update/${productId}`;
    return this.http.put(url, productData);
  }

  addProduct(productData: any): Observable<any> {
    const url = `${this.apiUrl}/add`;
    console.log(productData)
    return this.http.put(url, productData);
  }

  deleteProduct(productId: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${productId}`;
    return this.http.delete(url);
  }
}
