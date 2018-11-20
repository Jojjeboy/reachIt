import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyContainerComponent } from './tally-container.component';

describe('ReachItContainerComponent', () => {
  let component: TallyContainerComponent;
  let fixture: ComponentFixture<TallyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
