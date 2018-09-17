import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { League } from "../structs/League";
import { LeagueService } from "../league.service";

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.css']
})
export class LeagueDetailComponent implements OnInit {

  @Input() league: League;

  constructor(
    private leagueService: LeagueService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getLeague();    
  }

  getLeague(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.leagueService.getLeague(id)
      .subscribe(league => this.league = league);
  }

  goBack(): void {
    this.location.back();
  }

}
