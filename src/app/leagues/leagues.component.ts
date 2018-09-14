import { Component, OnInit } from '@angular/core';
import { League } from "../structs/League";
import { LEAGUES } from "../mock-data/leagues";

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: League[];
  selectedLeague: League;

  constructor() { }

  ngOnInit() {
    this.leagues = LEAGUES;
    this.selectedLeague = new League();
    console.log(this.leagues);
  }

  onSelectLeague(league: League) {
    console.log(League);
    this.selectedLeague = league;
  }

}
