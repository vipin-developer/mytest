import { Component, OnInit } from '@angular/core';
import { users } from '../user';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formsv',
  templateUrl: './formsv.component.html',
  styleUrls: ['./formsv.component.css']
})
export class FormsvComponent implements OnInit {
  state=['jharkhand','karnataka','tamilnadu','bihar','odisha'];
  model:any={};
  sub=false;
onSubmit(){
  this.sub=true;
  window.alert("you have entered"+" "+this.model.name+" "+this.model.username+" "+this.model.phone);
}

  constructor() { }

  ngOnInit() {
  }

}
