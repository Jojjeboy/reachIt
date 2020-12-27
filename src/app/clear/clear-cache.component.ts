import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clear',
  templateUrl: './clear-cache.component.html',
  styleUrls: ['./clear-cache.component.css']
})
export class ClearCacheComponent implements OnInit  {

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
    this.localStorageService.init('reachIt');
  }
  
  clearCache() {
    this.localStorageService.clear();
    this.router.navigate(['/']);
  }

  abort() {
    this.router.navigate(['/']);
  }

}
