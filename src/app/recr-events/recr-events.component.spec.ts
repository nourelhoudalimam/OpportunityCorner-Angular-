import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrEventsComponent } from './recr-events.component';

describe('RecrEventsComponent', () => {
  let component: RecrEventsComponent;
  let fixture: ComponentFixture<RecrEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecrEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
