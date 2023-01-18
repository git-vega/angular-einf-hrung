import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: String [] = ["Superman", "Spiderman", "Batman", "Paco Llunque"];
  
  heroeborrado: String = ""; 

  borraElemento() {
    
     this.heroeborrado =  this.heroes.shift() || "" ;
    
 
  }

}
  