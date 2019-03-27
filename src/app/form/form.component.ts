import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tally } from '../Tally';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Input() tally: Tally;
  @Input() method: string;

  @Output() tallyAdd = new EventEmitter<Tally>();
  @Output() tallyUpdate = new EventEmitter<Tally>();
  @Output() tallyDelete = new EventEmitter<Tally>();
  @Output() tallyCleanHistory = new EventEmitter<Tally>();

  private confirmed = false;

  ngOnInit() {}

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

  isFormType(formType: string): boolean {
    return this.method === formType;
  }

  confirmDeleteTally() {
    this.confirmed = true;
  }

  cleanHistory() {
    this.tallyCleanHistory.emit(this.tally);
  }
}
