import { NgModule } from '@angular/core';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { ListProductComponent } from './module/list-product/list-product.component';
import { UpdateProductComponent } from './module/update-product/update-product.component';
import { AddProductComponent } from './module/add-product/add-product.component';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => localStorage.getItem('access_token'),
    allowedDomains: ['your-backend-domain.com'] // Remplacez par le domaine de votre backend AdonisJS
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListProductComponent,
    UpdateProductComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN', // Remplacez 'XSRF-TOKEN' par le nom du cookie CSRF de votre backend
      headerName: 'X-CSRF-Token', // Le nom de l'en-tête à utiliser pour le jeton CSRF
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
