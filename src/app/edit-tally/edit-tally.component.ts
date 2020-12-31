import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TallyService } from '../tally.service';
import { Tally } from '../Tally';
import { LocalStorageService } from '../local-storage.service'

@Component({
  selector: 'app-edit-tally',
  templateUrl: './edit-tally.component.html'
})
export class EditTallyComponent implements OnInit {
  tally: Tally;

  constructor(
    private tallyService: TallyService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute) {
      localStorageService.init('reachIt');
    }

    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      const objTally: Object = this.localStorageService.getItem(id);
      const tmpArr = this.tallyService.convertLSToTallies([objTally]);
      this.tally = tmpArr[0];
    }

    updateTally(tally: Tally): void {
      this.tallyService.update(this.tally);
      this.router.navigate(['/']);
    }

    deleteTally(tally: Tally): void {
      this.tallyService.delete(this.tally);
      this.router.navigate(['/']);
    }

    cleanHistory(tally: Tally): void {
      this.tallyService.cleanHistory(this.tally);
    }
}
