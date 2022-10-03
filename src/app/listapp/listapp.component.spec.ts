import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListappComponent } from './listapp.component';

describe('ListappComponent', () => {
  let component: ListappComponent;
  let fixture: ComponentFixture<ListappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
