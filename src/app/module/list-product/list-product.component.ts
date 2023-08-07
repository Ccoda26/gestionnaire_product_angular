import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router'; // Importez le Router


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  // Importez le ProductService et les autres dépendances nécessaires
  products: any[] = []; // Initialisation vide

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  // Méthode pour modifier un produit et naviguer vers la page /update
  modifierProduit(product: any) {
    // Vous pouvez ajouter ici la logique pour préparer les données ou effectuer toute autre action souhaitée avant la navigation.
    console.log('Produit à modifier :', product);

    // Redirection vers la page /update avec l'ID du produit dans l'URL
    this.router.navigate(['/produit/modifier', product.id]);
}

  onDeleteProduct(product: any): void {
    this.productService.deleteProduct(product.id).subscribe(
      (data) => {
        console.log('Produit supprimé :', data);
        this.router.navigate(['/']);
        // Faites ici toute action que vous souhaitez effectuer après la suppression réussie du produit.
      },
      (error) => {
        console.log('Erreur lors de la suppression du produit :', error);
      }
    );
}

}
