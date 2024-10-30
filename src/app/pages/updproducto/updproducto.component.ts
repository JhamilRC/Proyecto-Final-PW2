import { Component, OnInit } from '@angular/core';
import { ProductosModel } from '../../models/productos.models';
import { ActivatedRoute } from '@angular/router';
import { SproductosService } from '../../services/sproductos.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-updproducto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './updproducto.component.html',
  styleUrl: './updproducto.component.css'
})
export class UpdproductoComponent implements OnInit{
  productoModel: ProductosModel = new ProductosModel();
  constructor(
    private activatedRoute: ActivatedRoute,private sproducto: SproductosService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '0';
    this.productoModel.idproducto=parseInt(id);
    this.sproducto.getProductos(this.productoModel)
      .subscribe((resp) => {
        this.productoModel=resp[0];
    });
  }
  guardar(forma : NgForm) {
    if (forma.valid){
     this.sproducto.updProductos(this.productoModel)
      .subscribe((resp) => {
        console.log('Se registro el producto');
        Swal.fire({
          allowOutsideClick: false,
          title: 'Confirmacion',
          text: 'Se Modifico el Producto Correctamente'
        });
      });
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
