import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepadeComponent } from './Component/homepade/homepade.component';
import { AddWorkComponent } from './Component/admin/add-work/add-work.component';

const routes: Routes = [
  {path:"",component:HomepadeComponent},
  {path:"admin",component:AddWorkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
