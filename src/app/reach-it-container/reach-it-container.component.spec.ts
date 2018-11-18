import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachItContainerComponent } from './reach-it-container.component';

describe('ReachItContainerComponent', () => {
  let component: ReachItContainerComponent;
  let fixture: ComponentFixture<ReachItContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachItContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachItContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
