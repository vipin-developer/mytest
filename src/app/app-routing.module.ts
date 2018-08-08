import { NgModule } from '@angular/core';
import {Routes,RouterModule} from'@angular/router';
import { FormsvComponent } from './formsv/formsv.component';
import { LoginfComponent } from './loginf/loginf.component';
import { DashComponent } from './dash/dash.component';
const routes:Routes=[
  {path:'Signup',component:FormsvComponent},
  {path:'Login',component:LoginfComponent},
  {path:'Login/:username/:password',component:LoginfComponent},
  {path:'dash',component:DashComponent},
  {path:'dash/:username/:password',component:DashComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
export const routingcomponent=[FormsvComponent,LoginfComponent,DashComponent];
