import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairepostComponent } from './formulairepost.component';

describe('FormulairepostComponent', () => {
  let component: FormulairepostComponent;
  let fixture: ComponentFixture<FormulairepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulairepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
