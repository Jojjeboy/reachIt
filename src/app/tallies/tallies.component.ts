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

  constructor(
    private localStorageService: LocalStorageService,
    private uuidService: UUIDService,
    private tallyService: TallyService) {

    const examples = Array<Tally>();

    examples.push(
      new Tally ({
        name: 'PushUp',
        increseBy: 25,
        decreseBy: 25,
        resetEveryDay: true,
        uuid: uuidService.UUID(),
        value: 95,
        lastTouched: new Date(Date.now() - 5 * 3600 * 1000),
        goal: 100
      })
    );

    examples.push(
      new Tally ({
        name: 'Ab-rolls',
        increseBy: 10,
        decreseBy: 10,
        resetEveryDay: true,
        uuid: uuidService.UUID(),
        value: 30,
        lastTouched: new Date(Date.now() - 12 * 3600 * 1000),
        goal: 50
      })
      );

      localStorageService.init(examples, this.appTitle);
      tallyService.init();

      this.tallies = tallyService.convertLSToTallies(localStorageService.getAll());

    }

    increse(tally) {
      this.tallyService.increse(tally);
    }

    decrese(tally) {
      this.tallyService.decrese(tally);
    }
}
