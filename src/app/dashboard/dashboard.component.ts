import { Component, OnInit, Input } from '@angular/core';
import { Avengers } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
@Input()  hero:Avengers;
  constructor() { }

  ngOnInit() {
  }

}
