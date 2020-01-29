import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasServicesService {

  constructor( private http: HttpClient ) { }

  obtenerPersonas() {
    const url = 'http://localhost:2727/persona/personas';
    return this.http.get<Persona[]>(url);
  }



}
