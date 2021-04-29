import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcolegioComponent } from './editcolegio.component';

describe('EditcolegioComponent', () => {
  let component: EditcolegioComponent;
  let fixture: ComponentFixture<EditcolegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcolegioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcolegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
