import { NgModule } from '@angular/core';
import {Routes,RouterModule} from'@angular/router';
import { FormsvComponent } from './formsv/formsv.component';
import { LoginfComponent } from './loginf/loginf.component';
const routes:Routes=[
  {path:'Signup',component:FormsvComponent},
  {path:'Login',component:LoginfComponent},
  {path:'Login/:name/:password',component:LoginfComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
export const routingcomponent=[FormsvComponent,LoginfComponent];
