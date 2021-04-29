import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcolegioComponent } from './addcolegio.component';

describe('AddcolegioComponent', () => {
  let component: AddcolegioComponent;
  let fixture: ComponentFixture<AddcolegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcolegioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcolegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
