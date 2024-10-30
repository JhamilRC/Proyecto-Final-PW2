import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductosModel } from '../models/productos.models';
import { DatePipe } from '@angular/common';
import { ProcedureParam } from '../models/procedureparam';

const apiUlr = "https://disweb.jokamaliva.com/jro/";
const apiid = '';// environment.apiid;
const apillave = '';// environment.apillave;
@Injectable({ providedIn: 'root' })
export class SproductosService {
    constructor(private http: HttpClient, public datepipe: DatePipe) { }
    // productos: ProductosModel = new ProductosModel;
    //select
    selProductos(procedureParam: ProcedureParam) {
        const myheader = new HttpHeaders().set('Content-Type', 'application/form-data')
        let body = new HttpParams();
        body = body.set('idusuario', '1');
        body = body.set('llave', '2');
        // body = body.set('idusuario', localStorage.getItem('parmid') || '');
        // body = body.set('llave', localStorage.getItem('parmtoken') || '');
        //parametros
        body = body.set('pCampo0', procedureParam.pCampo0);
        body = body.set('pValor0', procedureParam.pValor0);
        body = body.set('pCampo1', procedureParam.pCampo1);
        body = body.set('pValor1', procedureParam.pValor1);
        body = body.set('pCampo2', procedureParam.pCampo2);
        body = body.set('pValor2', procedureParam.pValor2);
        body = body.set('pCampo3', procedureParam.pCampo3);
        body = body.set('pValor3', procedureParam.pValor3);
        body = body.set('pCampo4', procedureParam.pCampo4);
        body = body.set('pValor4', procedureParam.pValor4);
        body = body.set('pCampo5', procedureParam.pCampo5);
        body = body.set('pValor5', procedureParam.pValor5);
        body = body.set('pCampo6', procedureParam.pCampo6);
        body = body.set('pValor6', procedureParam.pValor6);
        body = body.set('pCampo7', procedureParam.pCampo7);
        body = body.set('pValor7', procedureParam.pValor7);
        //realizar consulta
        return this.http.post(apiUlr + 'selproductos', body)
            .pipe(map((resp: any) => {
                if (resp['info'] != null) {
                    if (resp['mesaje'] != null) {
                        return resp['info'].item;
                    } else {
                        console.log('FAILD');
                        return null;
                    }
                } else { console.log('error coneccion'); return null; }
            }));
    }
    //termina selProductos
    //create
    addProductos(productos: ProductosModel) {
        const myheader = new HttpHeaders().set('Content-Type', 'application/form-data')
        let body = new HttpParams();
        //parametros
        body = body.set('pidproducto', productos.idproducto.toString()); 
        body = body.set('pnombre', productos.nombre.toString()); 
        body = body.set('pprecio', productos.precio.toString()); 
        body = body.set('pstock', productos.stock.toString()); 
        body = body.set('pdescripcion', productos.descripcion.toString());//realizar consulta
        return this.http.post(apiUlr + 'addProductos', body)
            .pipe(map((resp: any) => {
                if (resp['info'] != null) {
                    if (resp['mesaje'] != null) {
                        return resp['info'].item;
                    }
                    else {
                        console.log('FAILD');
                        return null;
                    }
                }
                else {
                    console.log('error coneccion');
                    return null;
                }
            }));
    }
    //termina create
    //read
    getProductos(productos: ProductosModel) {
        const myheader = new HttpHeaders().set('Content-Type', 'application/form-data')
        let body = new HttpParams();
        body = body.set('idusuario', localStorage.getItem('parmid') || '');
        body = body.set('llave', localStorage.getItem('parmtoken') || '');
        //parametros
        body = body.set('pidproducto', productos.idproducto.toString()); body = body.set('pnombre', productos.nombre.toString()); body = body.set('pprecio', productos.precio.toString()); body = body.set('pstock', productos.stock.toString()); body = body.set('pdescripcion', productos.descripcion.toString());//realizar consulta
        return this.http.post(apiUlr + 'getProductos', body)
            .pipe(map((resp: any) => {
                if (resp['info'] != null) {
                    if (resp['mesaje'] != null) {
                        return resp['info'].item;
                    }
                    else {
                        console.log('FAILD');
                        return null;
                    }
                }
                else {
                    console.log('error coneccion');
                    return null;
                }
            }));
    }
    //termina read
    //update
    updProductos(productos: ProductosModel) {
        const myheader = new HttpHeaders().set('Content-Type', 'application/form-data')
        let body = new HttpParams();
        body = body.set('idusuario', localStorage.getItem('parmid') || '');
        body = body.set('llave', localStorage.getItem('parmtoken') || '');
        //parametros
        body = body.set('pidproducto', productos.idproducto.toString()); body = body.set('pnombre', productos.nombre.toString()); body = body.set('pprecio', productos.precio.toString()); body = body.set('pstock', productos.stock.toString()); body = body.set('pdescripcion', productos.descripcion.toString());//realizar consulta
        return this.http.post(apiUlr + 'updProductos', body)
            .pipe(map((resp: any) => {
                if (resp['info'] != null) {
                    if (resp['mesaje'] != null) {
                        return resp['info'].item;
                    }
                    else {
                        console.log('FAILD');
                        return null;
                    }
                }
                else {
                    console.log('error coneccion');
                    return null;
                }
            }));
    }
    //termina update
    //personalizado
    // papProductos(productos: ProductosModel, tipo: string, procedure: string) {
    //     const myheader = new HttpHeaders().set('Content-Type', 'application/form-data')
    //     let body = new HttpParams();
    //     body = body.set('idusuario', localStorage.getItem('parmid') || '');
    //     body = body.set('llave', localStorage.getItem('parmtoken') || '');
    //     body = body.set('tipo', tipo);
    //     body = body.set('procedure', procedure);
    //     //parametros
    //     body = body.set('pidproducto', productos.idproducto.toString()); body = body.set('pnombre', productos.nombre.toString()); body = body.set('pprecio', productos.precio.toString()); body = body.set('pstock', productos.stock.toString()); body = body.set('pdescripcion', productos.descripcion.toString());//realizar consulta
    //     return this.http.post(apiUlr + 'papProductos', body)
    //         .pipe(map((resp: any) => {
    //             if (resp['info'] != null) {
    //                 if (resp['mesaje'] != null) {
    //                     return resp['info'].item;
    //                 }
    //                 else {
    //                     console.log('FAILD');
    //                     return null;
    //                 }
    //             }
    //             else {
    //                 console.log('error coneccion');
    //                 return null;
    //             }
    //         }));
    // }
    //termina personalizado
}
