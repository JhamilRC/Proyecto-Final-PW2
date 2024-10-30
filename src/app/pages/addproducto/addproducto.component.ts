import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductosModel } from '../../models/productos.models';
import { SproductosService } from '../../services/sproductos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproducto',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './addproducto.component.html',
  styleUrl: './addproducto.component.css'
})
export class AddproductoComponent  implements OnInit{
  productoModel: ProductosModel = new ProductosModel();
  constructor(private sproducto: SproductosService) { }

  ngOnInit(): void {
    //Sconsole.log('estoy aqui');
  }
  guardar(forma : NgForm) {
    if (forma.valid){
     this.sproducto.addProductos(this.productoModel)
      .subscribe((resp) => {
        console.log('Se registro el producto');
        Swal.fire({
          allowOutsideClick: false,
          title: 'Confirmacion',
          text: 'Se registro el Producto Correctamente'
        });
      });
      forma.resetForm();
    }
    else{
      Swal.fire({
        allowOutsideClick: false,
        title: 'Confirmacion',
        text: 'Error al llenar registro de producto'
      });
    }
  }
}
