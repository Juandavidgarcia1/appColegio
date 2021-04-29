import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcursoComponent } from './listcurso.component';

describe('ListcursoComponent', () => {
  let component: ListcursoComponent;
  let fixture: ComponentFixture<ListcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
