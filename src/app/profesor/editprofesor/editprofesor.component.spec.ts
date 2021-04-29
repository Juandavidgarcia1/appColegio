import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofesorComponent } from './editprofesor.component';

describe('EditprofesorComponent', () => {
  let component: EditprofesorComponent;
  let fixture: ComponentFixture<EditprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
