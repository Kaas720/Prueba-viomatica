import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotassComponent } from './mascotass.component';

describe('MascotassComponent', () => {
  let component: MascotassComponent;
  let fixture: ComponentFixture<MascotassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
