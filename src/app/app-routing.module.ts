import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SeiyuuDetailsComponent} from "./seiyuu-details/seiyuu-details.component";

const routes: Routes = [
  { path: 'seiyuuDetails/:id', component: SeiyuuDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
