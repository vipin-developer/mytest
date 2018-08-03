import { Component, OnInit } from '@angular/core';
import {Avengers} from '../hero';
import {HEROES} from'../mock_heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 heroes=HEROES;
 selectedHero:Avengers;
 onSelect(hero: Avengers): void {
  this.selectedHero = hero;
}
 
  constructor() { }

  ngOnInit() {
  }

}
