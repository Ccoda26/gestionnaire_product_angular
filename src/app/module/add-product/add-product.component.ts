import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productData: any = {};

  constructor(private productService: ProductService) {} 

  onSubmit() {
    this.productService.addProduct(this.productData).subscribe(
      (response) => {
        console.log('Produit ajouté avec succès !');
        // Réinitialisez le formulaire après l'ajout réussi du produit
        this.productData = {};
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du produit :', error);
      }
    );
  }
}
