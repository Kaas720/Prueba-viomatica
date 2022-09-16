import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasCrearCuentaComponent } from './mascotas-crear-cuenta.component';

describe('MascotasCrearCuentaComponent', () => {
  let component: MascotasCrearCuentaComponent;
  let fixture: ComponentFixture<MascotasCrearCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotasCrearCuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotasCrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
