import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tally } from '../Tally';
import { TimeAgoPipe } from 'time-ago-pipe';

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
  constructor() { }

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
    if (this.tally.getGoal() !== null && this.tally.getValue() !== null) {
      this.percentage = (this.tally.getValue() / this.tally.getGoal() * 100);
      this.percentage = parseInt(this.percentage.toString(), 10);
      if (isNaN(this.percentage)) {
        this.percentage = 0;
      }
    }
  }


}
