import { Component, OnInit } from '@angular/core';
import {Avengers} from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 heroes:Avengers[];
 selectedHero:Avengers;
 onSelect(hero: Avengers): void {
  this.selectedHero = hero;
}
 
constructor(private heroService: HeroService)  { }
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}

  ngOnInit() {
    this.getHeroes();
  }

}
