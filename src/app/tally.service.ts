import { Injectable, Renderer2, ElementRef, RendererFactory2  } from '@angular/core';
import { Tally } from './Tally';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TallyService {

  private renderer: Renderer2;

  constructor(
    private localStorageService: LocalStorageService,
    private rendererFactory: RendererFactory2,
    private el: ElementRef) {
      this.renderer = rendererFactory.createRenderer(null, null);
    }


  init(): void {
    const lsTallyCounters = <Array<Object>> this.localStorageService.getAll();
    const tallyCounters = <Array<Tally>> this.convertLSToTallies(lsTallyCounters);

    this.resetOldTallyCounter(tallyCounters);
  }

  getTallies(): Array<Tally> {
    const lsTallyCounters = <Array<Object>> this.localStorageService.getAll();
    return <Array<Tally>> this.convertLSToTallies(lsTallyCounters);
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

  increse(tally: Tally): void {
    let tallyValue = tally.getValue();
    const tallyIncreseBy = tally.getIncreseBy();
    tallyValue += tallyIncreseBy;
    tally.setValue(tallyValue);
    tally.touch();
    this.localStorageService.update(this.convertToLsTally(tally));
    this.toggleBodyClass();
  }

  decrese(tally: Tally): void {
    let tallyValue = tally.getValue();
    const tallyIncreseBy = tally.getDecreseBy();
    if (tallyValue > 0) {
      tallyValue -= tallyIncreseBy;
      tally.setValue(tallyValue);
      tally.touch();
      this.localStorageService.update(this.convertToLsTally(tally));
      this.toggleBodyClass();
    }
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

  isAllDone(tallyCounters: Array<Tally>): any {
    for (const tallyCounter of tallyCounters) {
      if (tallyCounter.getValue() < tallyCounter.getGoal()) {
        return false;
      }
    }
    return true;
  }

  toggleBodyClass(): void {
    if (this.localStorageService.getKey() === null) {
      this.localStorageService.initWithoutData('reachIt');
    }
    if (this.isAllDone(this.getTallies())) {
      this.renderer.addClass(document.body, 'doneanddone');
    } else {
      this.renderer.removeClass(document.body, 'doneanddone');
    }
  }



}
