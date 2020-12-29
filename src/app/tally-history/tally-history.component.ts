import { Component, Input } from '@angular/core';
import { History } from '../History';

@Component({
  selector: 'app-tally-history',
  templateUrl: './tally-history.component.html',
  styleUrls: ['./tally-history.component.css']
})
export class TallyHistoryComponent {
  
  @Input() resetEveryday: Boolean;
  @Input() history: Array<History>;
  @Input() showlabel: Boolean = false;

}
