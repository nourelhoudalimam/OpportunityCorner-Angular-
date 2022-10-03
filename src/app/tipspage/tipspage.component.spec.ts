import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipspageComponent } from './tipspage.component';

describe('TipspageComponent', () => {
  let component: TipspageComponent;
  let fixture: ComponentFixture<TipspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
