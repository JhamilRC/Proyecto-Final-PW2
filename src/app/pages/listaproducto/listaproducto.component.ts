import { Component, OnInit } from '@angular/core';
import { ProcedureParam } from '../../models/procedureparam';
import { SproductosService } from '../../services/sproductos.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listaproducto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listaproducto.component.html',
  styleUrl: './listaproducto.component.css'
})
export class ListaproductoComponent implements OnInit{
  procedureParam: ProcedureParam = new ProcedureParam();
  productos: any[] = [];
  constructor(private sproducto: SproductosService, private router:Router) { }
  ngOnInit(): void {
    this.procedureParam.inicia();
     this.procedureParam.pCampo0='Oidproducto';
     this.procedureParam.pValor0='asc';
    this.sproducto.selProductos(this.procedureParam)
      .subscribe((resp: any) => {
        this.productos = resp;

      });
  }
  detalle(idproducto: number) {
    console.log(idproducto);
    this.router.navigate(['/producto', idproducto]);
  }
  banner(){
    this.router.navigate(['/producto', 8]);
  }
}
