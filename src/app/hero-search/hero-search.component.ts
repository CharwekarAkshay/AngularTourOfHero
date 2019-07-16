import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }


  // Push the search term in observable
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void  {
    this.heroes$ = this.searchTerms.pipe(
      // Wait for 300ms after every key stroke
      debounceTime(300),
      // ignore new term if same as previous
      distinctUntilChanged(),
      // switch to new search observable each time the term change
      switchMap((term: string) => this.heroService.searchHero(term))
    );
  }



}
