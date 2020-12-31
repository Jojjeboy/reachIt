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
  @Input() method: string;

  @Output() tallyAdd = new EventEmitter<Tally>();
  @Output() tallyUpdate = new EventEmitter<Tally>();
  @Output() tallyDelete = new EventEmitter<Tally>();
  @Output() tallyCleanHistory = new EventEmitter<Tally>();
  

  private confirmed = false;

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

  toggleActive(value: boolean) {
    this.tally.setActive(value);
  }

  isFormType(formType: string): boolean {
    return this.method === formType;
  }

  confirmDeleteTally() {
    this.confirmed = true;
  }

  tallyHasHistory() {
    return this.tally.getHistory().length > 0;
  }

  cleanHistory() {
    this.tallyCleanHistory.emit(this.tally);
  }

  valid() : boolean{
    let valid = true;
    if(!this.tally.getName() || this.tally.getName().length < 3){
      valid = false;
    }
    if(!this.tally.getIncreseBy()){
      valid = false;
    }
    if(!this.tally.getDecreseBy()){
      valid = false;
    }
    if(!this.tally.getGoal()){
      valid = false;
    }

    return valid;
  }
}
