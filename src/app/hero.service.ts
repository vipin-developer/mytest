import { Injectable } from '@angular/core';
import{Avengers} from './hero';
import{HEROES} from'./mock_heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Avengers[] {
    // TODO: send the message _after_ fetching the heroes
  this.messageService.add('HeroService: fetched heroes');
    return HEROES;
  }

  constructor(private messageService: MessageService) { }
}
