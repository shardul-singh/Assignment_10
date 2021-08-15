import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEmpComponent} from './add-emp/add-emp.component';
import {UpdEmpComponent} from './upd-emp/upd-emp.component';
import {GetEmpComponent} from './get-emp/get-emp.component';
import {DelEmpComponent} from './del-emp/del-emp.component';

const routes: Routes = [
  {
    component:AddEmpComponent,
    path:'add'
  },
  {
    component:UpdEmpComponent,
    path:'update/:id'
  },
  {
    component:GetEmpComponent,
    path:'get'
  },
  {
    component:DelEmpComponent,
    path:'del'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
