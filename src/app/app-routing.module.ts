import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { LeaguesComponent } from "./leagues/leagues.component";
import { LeagueDetailComponent } from "./league-detail/league-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: '', redirectTo: 'leagues', pathMatch: 'full'},
  {path: 'leagues', component: LeaguesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:id', component: LeagueDetailComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes, 
      // {enableTracing: true}
    )
  ]
})
export class AppRoutingModule { }
