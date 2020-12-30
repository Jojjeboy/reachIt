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
    //console.log(`Application version is: version (from package.json)=${VERSION.version}, git-tag=${VERSION.tag}, git-hash=${VERSION.hash}`);
  }
}
