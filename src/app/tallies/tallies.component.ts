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

    localStorageService.init(this.appTitle);
    tallyService.init();

    this.tallies = tallyService.convertLSToTallies(localStorageService.getAll());
    this.tallies = tallyService.sortByLastTouched(this.tallies);


    this.showAll = this.localStorageService.getConfig().showAll;

  }

  increse(tally) {
    this.tallyService.increse(tally);
    this.tallies = this.tallyService.sortByLastTouched(this.tallies);
  }
  
  decrese(tally) {
    this.tallyService.decrese(tally);
    this.tallies = this.tallyService.sortByLastTouched(this.tallies);
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
