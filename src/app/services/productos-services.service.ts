import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicesService {

  constructor( private http: HttpClient ) { }
  obtenerProductos() {
    const url = 'http://localhost:2727/categoria/categorias';
    return this.http.get<Categoria[]>(url);
  }
}
