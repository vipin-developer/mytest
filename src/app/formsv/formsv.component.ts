import { Component, OnInit } from '@angular/core';
import { users } from '../user';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formsv',
  templateUrl: './formsv.component.html',
  styleUrls: ['./formsv.component.css']
})
export class FormsvComponent implements OnInit {
  state=['jharkhand','karnataka','tamilnadu','bihar','odisha'];
  model:any={};
  sub=false;
onSubmit(model){
 this.router.navigate(['/Login',{name:this.model.name,password:this.model.password}])
}


  constructor( private router:Router) { }

  ngOnInit() {
  }

}
