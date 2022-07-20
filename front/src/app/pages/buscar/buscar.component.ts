import { Component, OnInit } from '@angular/core';
// Importamos la configuración básica de angular form
import { FormControl, FormGroup } from '@angular/forms';
//Importamoes la libreria Service
import { LibreriaService } from 'src/app/services/libreria.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
// Acá declaramos en formulario, Indicando los campos que tiene
// Al campo le agregamos '' para indicarle de manera predeterminada que va a estar vacío.
  busquedaForm = new FormGroup({
    termino: new FormControl(),
  });

  constructor(
    private libreriaService: LibreriaService
  ) { }

  onSubmit (){
    console.log("Vas re bien");
    //llamar al servicio y enviarle a la función FindBokks  el termino que envío el usuario.
  
    //Conseguir el dato de lo que tipeo el usuario
    const { termino }= this.busquedaForm.value;

    this.libreriaService.findBooks(termino).subscribe(libros => {
      console.log('Resultados', libros);
    });
  }

  ngOnInit(): void {
  }

}
