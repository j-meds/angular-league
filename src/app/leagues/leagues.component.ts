import { Component, OnInit } from '@angular/core';
import { LeagueService } from "../league.service";

import { League } from "../structs/League";

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: League[];
  selectedLeague: League;

  // Initial lifecycle
  constructor(private leagueService: LeagueService) { }

  getHereos(): void {
    this.leagueService.getLeagues()
      .subscribe(leagues => this.leagues = leagues);
  }

  ngOnInit() {
    this.getHereos();
    console.log(this.leagues);
  }

  // Events
  onSelectLeague(league: League) {
    console.log(league);
    this.selectedLeague = league;
  }

}
