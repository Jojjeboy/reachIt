import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tally } from '../Tally';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { }

  @Input() tally: Tally;

  @Output() tallyAdd = new EventEmitter<Tally>();
  @Output() tallyUpdate = new EventEmitter<Tally>();
  @Output() tallyDelete = new EventEmitter<Tally>();



  addTally() {
    this.tallyAdd.emit(this.tally);
  }

  updateTally() {
    this.tallyUpdate.emit(this.tally);
  }

  deleteTally() {
    this.tallyDelete.emit(this.tally);
  }

  toggleResetEveryday(value: boolean) {
    this.tally.setResetEveryday(value);
  }


}
