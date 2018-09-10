import { Component, OnInit } from '@angular/core';
import { League } from "../structs/League";

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  league: League = {
    id: 1,
    sport: "basketball",
    name: "YMCA Adult League",
    Teams: 8,
    description: "YMCA Carlsbad",
    location: {
      city: "Carlsbad",
      state: "CA",
      street: "foo",
      zipCode: 92056
    } 
  };

  constructor() { }

  ngOnInit() {
    console.log(this.league);
  }

}
