import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TallyService } from '../tally.service';
import { Tally } from '../Tally';
import { UUIDService } from '../uuid.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-edit-tally',
  templateUrl: './edit-tally.component.html',
  styleUrls: ['./edit-tally.component.css']
})
export class EditTallyComponent implements OnInit {
  tally: Tally;
  confirm = false;

  constructor(
    private tallyService: TallyService,
    private uuidService: UUIDService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute) {
      localStorageService.initWithoutData('reachIt');
    }


    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      const objTally: Object = this.localStorageService.getItem(id);
      const tmpArr = this.tallyService.convertLSToTallies([objTally]);
      this.tally = tmpArr[0];
    }

    updateTally(): void {
      this.tallyService.update(this.tally);
      this.router.navigate(['/']);
    }
    deleteTally(): void {
      this.tallyService.delete(this.tally);
      this.router.navigate(['/']);
    }

    toggleResetEveryday(value: boolean) {
      this.tally.setResetEveryday(value);
    }

    confirmDeleteTally() {
      this.confirm = true;
    }

}
