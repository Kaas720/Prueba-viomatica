import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mascotas } from '../interfaces/Mascotas';
import { producto } from '../interfaces/Producto';
import { MascotasService } from '../services/mascotas.service';

@Component({
  selector: 'app-mascotass',
  templateUrl: './mascotass.component.html',
  styleUrls: ['./mascotass.component.css']
})
export class MascotassComponent implements OnInit {

  constructor(private service : MascotasService, private router: Router) { }
  mascotas: mascotas[] | undefined;
  ngOnInit(): void {
    this.traerMascotas();
  }
  traerMascotas(){
    this.service.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }
  dirigirseAgregarMascotas(){
    this.router.navigate(['/NuevaMascotas']);
  }
}
