import { Component, OnInit } from '@angular/core';
import { TallyService } from '../tally.service';
import { Tally } from '../Tally';
import { UUIDService } from '../uuid.service';

@Component({
  selector: 'app-add-tally',
  templateUrl: './add-tally.component.html',
  styleUrls: ['./add-tally.component.css']
})
export class AddTallyComponent implements OnInit {
  tally: Tally;

  constructor(private tallyService: TallyService, private uuidService: UUIDService) {}

  ngOnInit() {
    this.tally = this.tallyService.getEmptyTally();
  }

  addTally() {
    console.log(this.tally);
  }
}
