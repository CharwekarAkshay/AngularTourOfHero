import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService  } from './message.service';


import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched Heroes');
    return of(HEROES);
  }

}
