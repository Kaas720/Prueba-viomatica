import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mascotas } from '../interfaces/Mascotas';
import { MascotasService } from '../services/mascotas.service';

@Component({
  selector: 'app-mascotas-crear-cuenta',
  templateUrl: './mascotas-crear-cuenta.component.html',
  styleUrls: ['./mascotas-crear-cuenta.component.css']
})
export class MascotasCrearCuentaComponent implements OnInit {
  mascotaNueva = new FormGroup({
    nombreMascota: new FormControl('',Validators.required),
    razaMascota: new FormControl('', Validators.required),
    edadMascota: new FormControl('', Validators.required)
  })
  
  constructor(private service : MascotasService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const mascotasList : mascotas = {
      nombreMascota: this.mascotaNueva.value.nombreMascota!,
      razaMascota : this.mascotaNueva.value.razaMascota!,
      edadMascota : (Number(this.mascotaNueva.value.edadMascota))
    };
    this.service.postMascotas( mascotasList).subscribe(data => {
      alert('Se agrego');
      this.router.navigate(['']);
    },
    (errorData) => {
      alert(errorData.error); 
    }
    );
  }
}
