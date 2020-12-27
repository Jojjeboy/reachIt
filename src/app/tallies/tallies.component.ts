import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Tally } from '../Tally';
import { TallyService } from '../tally.service';
import { UUIDService } from '../uuid.service';


@Component({
  selector: 'app-tallies-item',
  templateUrl: './tallies.component.html',
  styleUrls: ['./tallies.component.css']
})
export class TalliesComponent {

  appTitle = 'reachIt';
  tallies = Array<Tally>();
  public showAll: boolean;

  constructor(
    private localStorageService: LocalStorageService,
    private uuidService: UUIDService,
    private tallyService: TallyService) {

    const examples = Array<Tally>();

    examples.push(
      new Tally({
        name: 'PushUp',
        increseBy: 25,
        decreseBy: 25,
        resetEveryDay: true,
        uuid: uuidService.UUID(),
        value: 25,
        lastTouched: new Date(Date.now() - 5 * 3600 * 1000),
        history: [
          { value: 50, date: new Date(Date.now() - 5 * 3600 * 1000) },
          { value: 100, date: new Date(Date.now() - 10 * 3600 * 1000) },
          { value: 200, date: new Date(Date.now() - 15 * 3600 * 1000) }
        ],
        goal: 100,
        topScore: 125,
        active: true
      })
    );

    examples.push(
      new Tally({
        name: 'Ab-rolls',
        increseBy: 10,
        decreseBy: 10,
        resetEveryDay: true,
        uuid: uuidService.UUID(),
        value: 30,
        lastTouched: new Date(Date.now() - 12 * 3600 * 1000),
        history: [
          { value: 45, date: new Date(Date.now() - 12 * 3600 * 1000) },
          { value: 30, date: new Date(Date.now() - 36 * 3600 * 1000) }
        ],
        goal: 50,
        topScore: 90,
        active: true
      })
    );

    localStorageService.init(this.appTitle);
    tallyService.init();

    this.tallies = tallyService.convertLSToTallies(localStorageService.getAll());

    this.showAll = this.localStorageService.getConfig().showAll;

  }

  increse(tally) {
    this.tallyService.increse(tally);
  }

  decrese(tally) {
    this.tallyService.decrese(tally);
  }

  eventCheck(event){
    let config = this.localStorageService.getConfig();
    this.showAll = event.target.checked;
    config.showAll = this.showAll;
    this.localStorageService.saveConfig(config);
  }

  getShowAll() {
    return this.showAll;
  }
}
