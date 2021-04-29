import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasignaturaComponent } from './listasignatura.component';

describe('ListasignaturaComponent', () => {
  let component: ListasignaturaComponent;
  let fixture: ComponentFixture<ListasignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
