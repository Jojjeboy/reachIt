import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachItItemComponent } from './reach-it-item.component';

describe('ReachItItemComponent', () => {
  let component: ReachItItemComponent;
  let fixture: ComponentFixture<ReachItItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachItItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachItItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
