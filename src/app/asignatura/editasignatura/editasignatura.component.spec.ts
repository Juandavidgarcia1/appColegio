import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditasignaturaComponent } from './editasignatura.component';

describe('EditasignaturaComponent', () => {
  let component: EditasignaturaComponent;
  let fixture: ComponentFixture<EditasignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditasignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditasignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
