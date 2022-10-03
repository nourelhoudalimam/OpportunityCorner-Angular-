import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrTipsComponent } from './recr-tips.component';

describe('RecrTipsComponent', () => {
  let component: RecrTipsComponent;
  let fixture: ComponentFixture<RecrTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecrTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
