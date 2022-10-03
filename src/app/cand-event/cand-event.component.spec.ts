import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandEventComponent } from './cand-event.component';

describe('CandEventComponent', () => {
  let component: CandEventComponent;
  let fixture: ComponentFixture<CandEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
