import { Asistente } from './asistente';
import { Dj } from './dj';

export interface Fiesta {
    aforo: number;
    descripcion: string;
    djs: Dj[];
    fecha: number[];
    galeria: string[];
    publico: Asistente[];
    ubicacion: number[];
}
