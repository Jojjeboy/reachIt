import { Injectable } from '@angular/core';
import { Tally } from './Tally';
import { History } from './History';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TallyService {

  constructor(private localStorageService: LocalStorageService) { }

  private showAll = false;

  init(): void {
    const lsTallyCounters = <Array<Object>> this.localStorageService.getAll();
    const tallyCounters = <Array<Tally>> this.convertLSToTallies(lsTallyCounters);

    this.resetOldTallyCounter(tallyCounters);
  }


  resetOldTallyCounter(tallyCounters: Array<Tally>): void {
    for (const tallyCounter of tallyCounters) {
      if (this.isOld(tallyCounter)) {
        this.addToHistory(tallyCounter);
        tallyCounter.setValue(0);
        this.localStorageService.update(this.convertToLsTally(tallyCounter));
      }
    }
  }

  isOld(tallyCounter: Tally): Boolean {
    const now = new Date();
    return now.getDate() !== tallyCounter.getLastTouched().getDate();
  }

  addToHistory(tally: Tally): void {
    const tallyHistory: Array<History> = tally.getHistory();
    if(tallyHistory.length < 1){

      const newHistoryEntry = new History({
        value: tally.getValue(),
        date: tally.getLastTouched()
      });
      tallyHistory.push(newHistoryEntry);
      tally.setHistory(tallyHistory);
      this.localStorageService.update(this.convertToLsTally(tally));  
    }
    else { 
      tallyHistory.forEach( history => {
        if(new Date(history.date).toDateString() !== tally.getLastTouched().toDateString()){
          const newHistoryEntry = new History({
            value: tally.getValue(),
            date: tally.getLastTouched()
          });
          tallyHistory.push(newHistoryEntry);
          tally.setHistory(tallyHistory);
          this.localStorageService.update(this.convertToLsTally(tally));        
        }
      });
    }
  }

  increse(tally: Tally): void {
    let tallyValue = tally.getValue();
    const tallyIncreseBy = tally.getIncreseBy();
    tallyValue += tallyIncreseBy;
    tally.setValue(tallyValue);
    if (tallyValue > tally.getTopScore()) {
      tally.setTopScore(tally.getValue());
    }
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

  cleanHistory(tally: Tally): void {
    tally.setHistory([]);
    tally.touch();
    this.localStorageService.update(this.convertToLsTally(tally));
  }

  convertLSToTallies(tallyCounters: Array<object>): Array<Tally> {
    const returnArr = new Array<Tally>();
    for (const obj of tallyCounters) {
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
      history: [],
      goal: null,
      topScore: 0,
      active: true
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

  toggleShowAll(): void {
    let config = this.localStorageService.getConfig();
    this.showAll = !this.showAll;
    config.showAll = this.showAll;
    this.localStorageService.saveConfig(config);
    console.log('this.showAll: ');
    console.log(this.showAll);
  }

  getShowAll(): boolean {
    return this.showAll
  }
}
