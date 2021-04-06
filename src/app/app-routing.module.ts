import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FiboaskComponent} from './fiboask/fiboask.component';
import {ArraytaskComponent} from './arraytask/arraytask.component';

const routes: Routes = [
{path:'fibotask',component:FiboaskComponent},
{path:'arraytask',component:ArraytaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
