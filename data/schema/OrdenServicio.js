
export const TdOrdenServicio =  `

type OrdenServicio {
id:ID
orden: Int
estado:Int
fechainicio: String
cliente: String
tecnico: String
serie: String
falla: String
direccion: String
reporte: Int
mensaje: String

}



input OrdenServicioInput {
id:ID
orden: Int
estado:Int
fechainicio: String
cliente: String
tecnico: String
serie: String
falla: String
direccion: String
reporte: Int
}



`