import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 5, name: 'Dr. Nice' },
      { id: 6, name: 'Bombasto' },
      { id: 7, name: 'Celeritas' },
      { id: 8, name: 'Magneta' },
      { id: 9, name: 'RubberMan' },
      { id: 10, name: 'Dynama' },
      { id: 11, name: 'Dr. IQ' },
      { id: 12, name: 'Magma' },
      { id: 13, name: 'Tornado' }
    ];
    return {heroes};
  }

 
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}