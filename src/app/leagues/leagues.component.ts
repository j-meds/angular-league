import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  league = {
    sport: "basketball",
    name: "YMCA Adult League",
    Teams: 8,
    description: "YMCA Carlsbad",
    location: {
      city: "Carlsbad",
      State: "CA",
      zipCode: 92056,
      street: "",
    }   
  };

  constructor() { }

  ngOnInit() {
    console.log("init");
  }

}
