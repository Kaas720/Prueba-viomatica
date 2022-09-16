import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { producto} from 'src/app/interfaces/Producto';

@Component({
  selector: 'app-componente-inicio',
  templateUrl: './componente-inicio.component.html',
  styleUrls: ['./componente-inicio.component.css']
})
export class ComponenteInicioComponent implements OnInit {
  productoData: producto[] | undefined;
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  cantidad: number = 1;
  constructor(private _productoService: ProductoService) { }
  
  ngOnInit(): void {
    this.obtenerMascotas();
  }
  id = 0;
  obtenerMascotas(){
    this._productoService.getProducto().subscribe(data => {
      this.productoData = data;
    });
  }
  ingresarCamposTabla(){
    if(!this.buscarProductoRepetido()){
      var myTable = document.querySelector("table"); 
      var precio = 0;
      if(myTable!= null){
        var row = myTable.insertRow(myTable.rows.length);
        this.id++;
        if(this.opcionSeleccionado== '0'){
          if(this.productoData !== undefined){
          this.opcionSeleccionado= this.productoData[0].nombreProducto;
          }
        }
        if(this.productoData !== undefined){
          for(let producto of this.productoData){
            if(producto.nombreProducto == this.opcionSeleccionado){
              precio = producto.valorUnitario;
            }
          }
        }  
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = '<th scope="row">'+this.id+'</th>';
        cell2.innerHTML = '<td>'+this.opcionSeleccionado+'</td>';;
        cell3.innerHTML = '<td>'+precio+'</td>';;
        cell4.innerHTML = '<td>'+this.cantidad+'</td>';;
        cell5.innerHTML = '<td>'+this.cantidad*precio+'</td>';;
        cell6.innerHTML = '<td> <button style="background-color: transparent; border: none;"><i class="bi bi-trash"></i></button></td>';
      }    
    }
    this.sumarPrecio(); 
  }
  buscarProductoRepetido(): boolean{
    const tabla = document.querySelector("table"); ;
    if(tabla != null){
      let numeroRows : number = Number(tabla.rows.length);
    for(let i = 0; i< numeroRows-1; i++){
      if(tabla.rows[i+1].cells[1].innerHTML == this.opcionSeleccionado){
        tabla.rows[i+1].cells[3].innerHTML = ""+(Number(tabla.rows[i+1].cells[3].innerHTML)+this.cantidad);
        tabla.rows[i+1].cells[4].innerHTML = ""+(Number(tabla.rows[i+1].cells[2].innerHTML)*Number(tabla.rows[i+1].cells[3].innerHTML));
        return true;
      }
    }
    }
    return false;
  }
  totalSinIva = 0;
  totalConIva = 0;
  IVA = 0;
  sumarPrecio(){
    const tabla = document.querySelector("table"); ;
    let totalSinIva: number = 1;
    this.totalSinIva =0;
    this.totalConIva = 0;
    this.IVA = 0;
    if(tabla != null){
      let numeroRows : number = Number(tabla.rows.length);
    for(let i = 0; i< numeroRows-1; i++){
      this.totalSinIva  =  Number(tabla.rows[i+1].cells[4].innerHTML)+this.totalSinIva;
    }
    }
    this.IVA  = (this.totalSinIva*0.12);
    this.totalConIva = this.IVA  + this.totalSinIva;
  }
  capturar() {
    this.verSeleccion = this.opcionSeleccionado;
  }
}
