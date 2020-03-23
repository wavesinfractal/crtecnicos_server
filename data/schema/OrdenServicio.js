

export const TdOrdenServicio = `
scalar Date
scalar JSON
type OrdenServicio {
id:ID
orden: Int
pendiente: Boolean
revizado: Boolean
estado: ESTADO
fecha_inicio: Date
fecha_programacion: Date
usuario:  Usuario
tecnico: Usuario
articulo: Articulo
falla: String
direccion: String
telefonos: [Int]
boletas: [Int]
mensaje: String

}

input OrdenServicioInput {
id:ID
orden: Int
estado:ESTADO
fecha_programacion: Date
usuario: String
tecnico: String
articulo: String
falla: String
direccion: String
telefonos: [Int]
reporte: Int
}

enum ESTADO {
  TERMINADO
  PENDIENTE
  PXR
  CANCELADO
  CANCELADO_X_CLIENTE
}

`;

