import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService  } from './message.service';


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  private heroesUrl = 'api/heroes';

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // getHeroes(): Observable<Hero[]> {

  //   this.messageService.add('HeroService: fetched Heroes');
  //   return of(HEROES);
  // }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
