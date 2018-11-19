import { Injectable, OnInit } from '@angular/core';
import { TallyCounter } from './tally-counter';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TallyCounterService implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    const tallyCounters = this.localStorageService.getAll();

    this.resetOldTallyCounter(tallyCounters);
  }

  isToday(reachIt: TallyCounter): Boolean {
    const now = new Date();
    return now.getDate() === reachIt.getLastTouched().getDate();
  }

  resetOldTallyCounter(tallyCounters: Array<any>): void {

  }
}
