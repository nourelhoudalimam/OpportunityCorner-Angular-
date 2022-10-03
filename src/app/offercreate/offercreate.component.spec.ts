import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffercreateComponent } from './offercreate.component';

describe('OffercreateComponent', () => {
  let component: OffercreateComponent;
  let fixture: ComponentFixture<OffercreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffercreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
