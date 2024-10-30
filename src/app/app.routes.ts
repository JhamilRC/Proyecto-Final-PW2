import { Routes } from '@angular/router';
import { ListaproductoComponent } from './pages/listaproducto/listaproducto.component';
import { AddproductoComponent } from './pages/addproducto/addproducto.component';
import { DetalleproductoComponent } from './pages/detalleproducto/detalleproducto.component';
import { UpdproductoComponent } from './pages/updproducto/updproducto.component';
import { TablaproductosComponent } from './pages/tablaproductos/tablaproductos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    { path: 'listarproductos', component: ListaproductoComponent },
    { path: 'addproductos', component: AddproductoComponent },
    { path: 'producto/:id', component: DetalleproductoComponent },
    { path: 'tablaproductos', component: TablaproductosComponent },
    { path: 'updproductos/:id', component: UpdproductoComponent },
    { path: '**', component: InicioComponent },
];
