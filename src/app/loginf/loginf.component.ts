import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginf',
  templateUrl: './loginf.component.html',
  styleUrls: ['./loginf.component.css']
})
export class LoginfComponent implements OnInit {
  model:any={};
  sub=false;
  onSubmit(){
    this.sub=true;
    window.alert("you have entered"+this.model.username+" "+this.model.password);
  }
public myhero=[];
public namelogin;
public passlogin;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let namel=this.route.snapshot.paramMap.get("name");
    this.namelogin=namel;
    let passl=this.route.snapshot.paramMap.get("password");
    this.passlogin=passl;
  }

}
