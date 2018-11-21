import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tally } from '../Tally';

@Component({
  selector: 'app-tally',
  templateUrl: './tally.component.html',
  styleUrls: ['./tally.component.css']
})
export class TallyComponent implements OnInit {

  @Output() tallyIncrese = new EventEmitter<Tally>();
  @Output() tallyDecrese = new EventEmitter<Tally>();
  @Input() tally: Tally;

  constructor() { }

  ngOnInit() {
  }


  arrowUp() {
    this.tallyIncrese.emit(this.tally);
  }

  arrowDown() {
    this.tallyDecrese.emit(this.tally);
  }


}
