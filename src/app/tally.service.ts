import { Injectable } from '@angular/core';
import { Tally } from './Tally';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TallyService {
  private lsTallyCounters;
  private tallyCounters;

  constructor(private localStorageService: LocalStorageService) {
    this.lsTallyCounters = <Array<Object>> this.localStorageService.getAll();
    this.tallyCounters = <Array<Tally>> this.convertLSToTallies(this.lsTallyCounters);

    this.resetOldTallyCounter(this.tallyCounters);
  }

  isOld(tallyCounter: Tally): Boolean {
    const now = new Date();
    return now.getDate() !== tallyCounter.getLastTouched().getDate();
  }

  resetOldTallyCounter(tallyCounters: Array<Tally>): void {
    for (const tallyCounter of tallyCounters) {
      if (this.isOld(tallyCounter)) {
        tallyCounter.setValue(0);
        this.localStorageService.update(this.convertToLsTally(tallyCounter));
      }
    }
  }

  isAllDone(): boolean {
    for (const tallyCounter of this.tallyCounters) {
      if (tallyCounter.getValue() < tallyCounter.getGoal()) {
        return false;
      }
    }
    return true;
  }

  increse(tally: Tally): void {
    let tallyValue = tally.getValue();
    const tallyIncreseBy = tally.getIncreseBy();
    tallyValue += tallyIncreseBy;
    tally.setValue(tallyValue);
    tally.touch();
    this.localStorageService.update(this.convertToLsTally(tally));
  }

  decrese(tally: Tally): void {
    let tallyValue = tally.getValue();
    const tallyIncreseBy = tally.getDecreseBy();
    if (tallyValue > 0) {
      tallyValue -= tallyIncreseBy;
      tally.setValue(tallyValue);
      tally.touch();
      this.localStorageService.update(this.convertToLsTally(tally));
    }
  }


  convertLSToTallies(tallyCounters: Array<object>): Array<Tally> {
    const returnArr = new Array<Tally>();
    for (const obj of this.tallyCounters) {
      const tallyCounter = new Tally(obj);
      tallyCounter.setLastTouched(new Date(tallyCounter.getLastTouched()));
      returnArr.push(tallyCounter);
    }
    return returnArr;
  }

  convertToLsTally(tallyCounter: Tally): Object {
    const po = Object.assign({}, tallyCounter);
    return po;
  }

  getEmptyTally() {
    return new Tally ({
      name: null,
      increseBy: null,
      decreseBy: null,
      resetEveryDay: null,
      uuid: null,
      value: 0,
      lastTouched: new Date(),
      goal: null
    });
  }

  save(tally: Tally): void {
    this.localStorageService.add(this.convertToLsTally(tally));
  }

  update(tally: Tally): void {
    this.touch(tally);
    this.localStorageService.update(this.convertToLsTally(tally));
  }

  delete(tally: Tally): void {
    this.localStorageService.removeItem(tally.getUuid());
  }

  touch(tally: Tally): void {
    tally.setLastTouched(new Date());
  }
}
