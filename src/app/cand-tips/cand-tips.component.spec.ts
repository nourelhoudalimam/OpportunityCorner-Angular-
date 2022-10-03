import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandTipsComponent } from './cand-tips.component';

describe('CandTipsComponent', () => {
  let component: CandTipsComponent;
  let fixture: ComponentFixture<CandTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
