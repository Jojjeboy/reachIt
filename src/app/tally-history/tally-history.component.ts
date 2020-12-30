import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tally } from '../Tally';
import { TallyService } from '../tally.service';
import { LOCALE_ID, Inject } from "@angular/core";
import { formatDate } from "@angular/common";
import { of } from "rxjs";




@Component({
  selector: 'app-tally-history',
  templateUrl: './tally-history.component.html',
  styleUrls: ['./tally-history.component.css']
})
export class TallyHistoryComponent {
  
  @Input() showlabel: Boolean = false;
  @Input() tally: Tally;

  @Output() tallyCleanHistory = new EventEmitter<Tally>();

  protected percentage: number;
  mdlSampleIsOpen : boolean = false;
  
  constructor(
    private tallyService: TallyService) {
    tallyService.init();
  }


  getPercentage(goal: number, value: number): number {
    return this.tallyService.recalculatePercentage(goal, value);
  }

  cleanHistory() {
    this.tallyCleanHistory.emit(this.tally);
  }

  openModal() {
    if(this.tally.getHistory().length > 0){
      this.mdlSampleIsOpen = true;
    }
  }

  discard() {
    this.mdlSampleIsOpen = false;
    this.tally.setResetEveryday(true);
  }

  eraseHistory() {
    this.cleanHistory();
    this.mdlSampleIsOpen = false;
  }

}
