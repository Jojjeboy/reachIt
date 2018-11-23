import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TallyService } from '../tally.service';
import { Tally } from '../Tally';
import { UUIDService } from '../uuid.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-add-tally',
  templateUrl: './add-tally.component.html',
  styleUrls: ['./add-tally.component.css']
})
export class AddTallyComponent {
  tally: Tally;

  constructor(
    private tallyService: TallyService,
    private uuidService: UUIDService,
    private localStorage: LocalStorageService,
    private router: Router) {
      localStorage.initWithoutData('reachIt');
      this.tally = this.tallyService.getEmptyTally();
      this.tally.setUuid(uuidService.UUID());
    }

  addTally() {
    this.tallyService.save(this.tally);
    this.router.navigate(['/']);
  }

  toggleResetEveryday(value: boolean) {
    this.tally.setResetEveryday(value);
  }
}
