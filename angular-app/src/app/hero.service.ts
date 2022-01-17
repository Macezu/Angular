import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './seed-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(x => x.id == id)!;
    this.log(`Hero service: fetched hero id=${id}`)
    return of(hero);
  }
  constructor(private messageService: MessageService, private http: HttpClient) { }
}

