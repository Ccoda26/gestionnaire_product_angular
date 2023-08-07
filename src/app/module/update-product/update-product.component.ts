import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  @Input() productId!: number;
  product: any;

  constructor( 
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
      this.getProductDetails();
    });
  }

  getProductDetails() {
    this.productService.getProductById(this.productId).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.log('Erreur lors de la récupération des détails du produit :', error);
      }
    );
  }
  
  updateProduct() {
    this.productService.updateProduct(this.productId, this.product).subscribe(
      (data) => {
        console.log('Produit mis à jour :', data);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Erreur lors de la mise à jour du produit :', error);
      }
    );
  }
}
