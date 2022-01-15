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
  constructor(private messageService : MessageService) { }
}

