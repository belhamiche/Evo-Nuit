import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from "./page404/page404.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  { path: '', redirectTo: 'HomepageComponent', pathMatch: 'full' },
  { path:"/home", component: HomepageComponent},
  { path: "**", component: Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
