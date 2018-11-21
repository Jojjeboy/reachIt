import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTallyComponent } from './add-tally.component';

describe('AddTallyComponent', () => {
  let component: AddTallyComponent;
  let fixture: ComponentFixture<AddTallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
