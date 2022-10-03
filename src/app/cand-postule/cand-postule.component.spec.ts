import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandPostuleComponent } from './cand-postule.component';

describe('CandPostuleComponent', () => {
  let component: CandPostuleComponent;
  let fixture: ComponentFixture<CandPostuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandPostuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandPostuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
