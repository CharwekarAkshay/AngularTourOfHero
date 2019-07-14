import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const heroes = [
      { id: 11, name: 'Captain Marvel' },
      { id: 12, name: 'Black Panther' },
      { id: 13, name: 'Mr Shin' },
      { id: 14, name: 'Star Lords' },
      { id: 15, name: 'Drax' },
      { id: 16, name: 'Rocket' },
      { id: 17, name: 'Gamora' },
      { id: 18, name: 'Nova' },
      { id: 19, name: 'Mangneto' },
      { id: 20, name: 'Ant Man' }
    ];

    return {heroes};

  }

  genId(heroes: Hero[]): number {

    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;

  }

}
