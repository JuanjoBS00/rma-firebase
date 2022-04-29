export class Player{
    id!: number;
    nombre!: string;
    apellidos!: string;
    posicion!: string;
    goles!: number;
    asistencias!: number;
    edad!: number;

    constructor(id: number, nombre: string, apellidos: string, posicion: string, goles: number, asistencias: number, edad: number){
      this.id = id;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.posicion = posicion;
      this.goles = goles;
      this.asistencias = asistencias;
      this.edad = edad;
    }
  }