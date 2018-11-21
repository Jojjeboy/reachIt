import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalliesComponent } from './tallies.component';

describe('ReachItItemComponent', () => {
  let component: TalliesComponent;
  let fixture: ComponentFixture<TalliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
