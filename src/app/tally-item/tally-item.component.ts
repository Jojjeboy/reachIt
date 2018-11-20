import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tally } from '../Tally';

@Component({
  selector: 'app-tally-item',
  templateUrl: './tally-item.component.html',
  styleUrls: ['./tally-item.component.css']
})
export class TallyItemComponent {

  constructor() { }

  @Output() tallyIncrese = new EventEmitter<Tally>();
  @Output() tallyDecrese = new EventEmitter<Tally>();

  @Input() tally: Tally;

  arrowUp() {
    this.tallyIncrese.emit(this.tally);
  }

  arrowDown() {
    this.tallyDecrese.emit(this.tally);
  }

}
