import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
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
    private renderer: Renderer2,
    private el: ElementRef,
    private tallyService: TallyService) {}

  ngOnInit() {
    if (this.tallyService.isAllDone()) {
      this.renderer.addClass(document.body, 'doneanddone');
    }
  }

  }
