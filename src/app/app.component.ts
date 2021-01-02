import { Component } from '@angular/core';
import { VERSION } from '../environments/version';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hash = VERSION.hash;
  public date = VERSION.date;
  appTitle = 'reachIt';
  

  constructor(private localStorageService: LocalStorageService) {
    this.localStorageService.init(this.appTitle);
    //console.log(VERSION);
  }
}