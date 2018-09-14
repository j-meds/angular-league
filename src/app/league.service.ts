import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { League } from "./structs/League";
import { LEAGUES } from "./mock-data/leagues";

import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private messageService: MessageService) { }

  getLeagues(): Observable<League[]> {
    this.messageService.add('LeagueService: fetched All leagues');
    return of(LEAGUES);
  }
}
