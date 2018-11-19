import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TallyCounter } from './tally-counter';
import { UUIDService } from './uuid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'reachIt';

  constructor(private localStorageService: LocalStorageService, private uuidService: UUIDService) {

    const examples = Array<TallyCounter>();

    examples.push(
      new TallyCounter ('PushUp', 25, 25, true, uuidService.UUID(), 0, new Date(Date.now() - 12 * 3600 * 1000))
    );
    examples.push(
      new TallyCounter ('Ab-rolls', 10, 10, true, uuidService.UUID(), 0, new Date(Date.now() - 3 * 3600 * 1000))
    );


    const config = {
      defaultData: examples
    };

    localStorageService.init(config, this.appTitle);


  }
}
