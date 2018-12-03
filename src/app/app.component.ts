import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Tally } from './Tally';
import { TallyService } from './tally.service';
import { UUIDService } from './uuid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private tallyService: TallyService,
    private localstorageservice: LocalStorageService) {}

  ngOnInit() {
    this.localstorageservice.initWithoutData('reachIt');
    this.tallyService.toggleBodyClass();
  }

}
