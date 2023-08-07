import { Component } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}
   // Méthode pour modifier un produit et naviguer vers la page /update
   ajouterProduit() {
    // Vous pouvez ajouter ici la logique pour préparer les données ou effectuer toute autre action souhaitée avant la navigation.
    console.log('Ajouter un produit ');

    // Redirection vers la page /update avec l'ID du produit dans l'URL
    this.router.navigate(['/produit/ajouter']);
}
}
