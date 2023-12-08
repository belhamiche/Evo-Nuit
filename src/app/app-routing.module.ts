import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { Page404Component } from './component/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: 'HomePageComponent', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: '**', component:Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
