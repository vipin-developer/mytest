import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  public dashname;
  public dashpass;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let named=this.route.snapshot.paramMap.get("username");
    this.dashname=named;
    let passd=this.route.snapshot.paramMap.get("password");
    this.dashpass=passd;
  }

}
