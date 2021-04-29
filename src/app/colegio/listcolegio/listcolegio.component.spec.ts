import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcolegioComponent } from './listcolegio.component';

describe('ListcolegioComponent', () => {
  let component: ListcolegioComponent;
  let fixture: ComponentFixture<ListcolegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcolegioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcolegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
