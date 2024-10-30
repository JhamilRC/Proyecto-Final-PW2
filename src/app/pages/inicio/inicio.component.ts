import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomsegurosPipe } from '../../pipe/domseguros.pipe';
import { Router, RouterOutlet } from '@angular/router';
import { ProcedureParam } from '../../models/procedureparam';
import { SproductosService } from '../../services/sproductos.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, DomsegurosPipe, RouterOutlet],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{
  videoUrl: string = 'https://www.youtube.com/embed/S1-QwIRjM-A?autoplay=1&mute=1&controls=0';
  procedureParam: ProcedureParam = new ProcedureParam();
  productos: any[] = [];
  constructor(private sproducto: SproductosService, private router:Router) { }

  ngOnInit(): void {
    this.procedureParam.inicia();
    // this.procedureParam.pCampo0='Cnombre';
    // this.procedureParam.pValor0='a';

    this.sproducto.selProductos(this.procedureParam)
      .subscribe((resp: any) => {
        this.productos = resp;

      });
  }
  detalle(idproducto: number) {
    console.log(idproducto);
    this.router.navigate(['/producto', idproducto]);
  }
  banner(id: number){
    this.router.navigate(['/producto', id]);
  }
}
