import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre : string = "Iroman";
    edad : number = 55;

    // gettter
   get  nombreCapitalizado() {

    return this.nombre.toUpperCase();
    }

    // Funcion 
    obtenerNombre() : string {
 
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre() : void{
        this.nombre = "Spideman";
    }

    cambiarEdad(): void {
        console.log("heyyy");
     this.edad = 33;
    }
}