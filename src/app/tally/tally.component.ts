import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tally } from '../Tally';
import { TallyService } from '../tally.service';

@Component({
  selector: 'app-tally',
  templateUrl: './tally.component.html',
  styleUrls: ['./tally.component.css']
})
export class TallyComponent implements OnInit {

  @Output() tallyIncrese = new EventEmitter<Tally>();
  @Output() tallyDecrese = new EventEmitter<Tally>();
  @Input() tally: Tally;
  @Input() showAll: boolean;

  percentage = 0.00;

  constructor(private tallyService: TallyService) {}

  ngOnInit() {
    this.recalculatePercentage();
  }

  arrowUp() {
    this.tallyIncrese.emit(this.tally);
    this.recalculatePercentage();
  }

  arrowDown() {
    this.tallyDecrese.emit(this.tally);
    this.recalculatePercentage();
  }

  recalculatePercentage() {
    this.percentage = this.tallyService.recalculatePercentage(this.tally.getGoal(), this.tally.getValue());
  }

  cleanHistory(tally: Tally): void {
    this.tallyService.cleanHistory(this.tally);
  }
}
