import { Component, Input } from '@angular/core';
import { Tally } from '../Tally';
import { TallyService } from '../tally.service';

@Component({
  selector: 'app-tally-history',
  templateUrl: './tally-history.component.html',
  styleUrls: ['./tally-history.component.css']
})
export class TallyHistoryComponent {
  
  @Input() showlabel: Boolean = false;
  @Input() tally: Tally;

  protected percentage: number;

  constructor(private tallyService: TallyService) {
    tallyService.init();
  }


  getPercentage(goal: number, value: number): number {
    return this.tallyService.recalculatePercentage(goal, value);
  }

}
