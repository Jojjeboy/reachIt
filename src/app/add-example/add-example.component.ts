import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Tally } from '../Tally';
import { TallyService } from '../tally.service';
import { UUIDService } from '../uuid.service';

@Component({
  selector: 'app-add-example',
  templateUrl: './add-example.component.html',
  styleUrls: ['./add-example.component.css']
})
export class AddExampleComponent {

  appTitle = 'reachIt';
  tallies = Array<Tally>();
  pushupAdded: boolean = false;
  bridgeAdded: boolean = false;
  abRollsAdded: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private uuidService: UUIDService,
    private tallyService: TallyService) {

    const examples = Array<Tally>();


    localStorageService.init(this.appTitle);
    tallyService.init();
    this.setStatus();

    
  }

  addPushups() {
    const pushups = new Tally({
      name: 'Armhävningar',
      increseBy: 25,
      decreseBy: 25,
      resetEveryDay: true,
      uuid: this.uuidService.UUID(),
      value: 0,
      lastTouched: new Date(),
      history: [],
      goal: 100,
      topScore: 0,
      active: true
    });

    this.tallyService.save(pushups);
    this.pushupAdded = true;
  }

  addBridge() {
    const abRoll = new Tally({
      name: 'Plankan (30sek)',
      increseBy: 10,
      decreseBy: 10,
      resetEveryDay: true,
      uuid: this.uuidService.UUID(),
      value: 0,
      lastTouched: new Date(),
      history: [],
      goal: 3,
      topScore: 0,
      active: true
    });

    this.tallyService.save(abRoll);
    this.bridgeAdded = true;
  }

  addAbRolls() {
    const abRoll = new Tally({
      name: 'Ab-rolls',
      increseBy: 10,
      decreseBy: 10,
      resetEveryDay: true,
      uuid: this.uuidService.UUID(),
      value: 30,
      lastTouched: new Date(),
      history: [],
      goal: 30,
      topScore: 0,
      active: true
    });

    this.tallyService.save(abRoll);
    this.abRollsAdded = true;
  }

  setStatus() {
    this.tallies = this.tallyService.convertLSToTallies(this.localStorageService.getAll());
    this.tallies.forEach( tally => {
      switch (tally.name) {
        case 'Armhävningar':
          this.pushupAdded = true;
          break;
        case 'Plankan (30sek)':
          this.bridgeAdded = true;
          break;
        case 'Ab-rolls':
          this.abRollsAdded = true;
        break;
      }
  });
  }

  

    



}
