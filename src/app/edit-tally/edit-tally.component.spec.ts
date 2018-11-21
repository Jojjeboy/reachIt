import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTallyComponent } from './edit-tally.component';

describe('EditTallyComponent', () => {
  let component: EditTallyComponent;
  let fixture: ComponentFixture<EditTallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
