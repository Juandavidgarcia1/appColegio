import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofesorComponent } from './addprofesor.component';

describe('AddprofesorComponent', () => {
  let component: AddprofesorComponent;
  let fixture: ComponentFixture<AddprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
