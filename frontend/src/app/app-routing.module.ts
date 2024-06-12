import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepadeComponent } from './Component/homepade/homepade.component';

const routes: Routes = [
  {path:"",component:HomepadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
