import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'krillin',
      poder: 8500,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
    {
      nombre: 'Goku',
      poder: 7500,
    },
  ];
  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  constructor() {}
  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
