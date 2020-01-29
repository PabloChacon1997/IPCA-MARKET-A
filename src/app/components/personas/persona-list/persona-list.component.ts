import { Component, OnInit } from '@angular/core';
import { PersonasServicesService } from 'src/app/services/personas-services.service';
import { Persona } from '../../../models/persona';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  constructor( private personService: PersonasServicesService ) {
  }
  listaPersonas: Persona[];

  ngOnInit() {
    this.personService.obtenerPersonas().subscribe( data => {
      console.log(data);
      this.listaPersonas = data;
    });
  }

}
