import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Tally } from './Tally';
import { TallyService } from './tally.service';
import { UUIDService } from './uuid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
        value: 100,
        lastTouched: new Date(Date.now() - 24 * 3600 * 1000)
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
        lastTouched: new Date(Date.now() - 12 * 3600 * 1000)
      })
      );

      const reachIt = {
        data: examples,
        config: {
          defaultResetEveryday: true,
          defaultValue: 0
        }
      };

      localStorageService.init(reachIt, this.appTitle);
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
