import { Component, OnInit } from '@angular/core';
import { ProductosServicesService } from 'src/app/services/productos-services.service';
import { Categoria } from '../../../models/categoria';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  constructor( private prodService: ProductosServicesService ) {
  }
  listaCategoria: Categoria[];
  ngOnInit() {
    this.prodService.obtenerProductos().subscribe( data => {
      this.listaCategoria = data;
      console.log(this.listaCategoria);
    });
  }

}
