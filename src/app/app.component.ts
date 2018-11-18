import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ReachIt } from './reach-it';
import { UUIDService } from './uuid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reachIt';

  constructor(private localStorageService: LocalStorageService, private uuidService: UUIDService) {

    const config = {
      defaultData: [{
        name: 'PushUp',
        increseBy: 25,
        decreseBy: 25,
        resetEveryDay: true,
        uuid: uuidService.UUID(),
        value: 0
      },
      {
        name: 'Ab-rolls',
        increseBy: 10,
        decreseBy: 10,
        resetEveryDay: true,
        uuid: uuidService.UUID(),
        value: 0
      },
      ]
    };
  }
}
