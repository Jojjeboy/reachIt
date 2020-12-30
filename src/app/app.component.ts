import { Component } from '@angular/core';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hash = VERSION.hash;
  constructor() {

    // 1. Get current version of hash and se if it's in local storage
    // 1a. If not create an object and push and save
    // 1b. If exist skip
    




    //console.log(`Application version is: version (from package.json)=${VERSION.version}, git-tag=${VERSION.tag}, git-hash=${VERSION.hash}`);
  }


}
