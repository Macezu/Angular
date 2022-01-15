import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './seed-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})


export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("Hero service: Fetched all heroes")
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(x => x.id == id)!;
    this.messageService.add(`Hero service: fetched hero id=${id}`)
    return of(hero);
  }
  constructor(private messageService: MessageService) { }
}

