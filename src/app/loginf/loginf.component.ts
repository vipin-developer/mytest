import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

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
    if(this.model.username==this.namelogin && this.model.password==this.passlogin){

      window.alert("yes");
    }else{
      window.alert("not");
    }
    this.router.navigate(['/dash',{username:this.model.username,password:this.model.password}])
  }
public myhero=[];
public namelogin;
public passlogin;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let namel=this.route.snapshot.paramMap.get("username");
    this.namelogin=namel;
    let passl=this.route.snapshot.paramMap.get("password");
    this.passlogin=passl;
  }

}
