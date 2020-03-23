export const TdBoletaReparacion = `

type BoletaReparacion{
    id:ID
    boleta: Int
    estado: String
    orden: ID
    tecnico: ID
    falla_encontrada: String
    solucion: String
    hora_inicio: String
    repuestos: [Repuestos]
    mensaje:String
}

input BoletaReparacionInput{
    id:ID
    estado: String
    orden: ID
    tecnico: ID
    falla_encontrada: String
    solucion: String
    hora_inicio: String
    repuestos: [RepuestosInput]
}


type  Repuestos{
    codigo: Int
    descripcion: String
    cantidad: Int
    cod_falla: Int
 }

input  RepuestosInput{
    codigo: Int
    descripcion: String
    cantidad: Int
    cod_falla: Int
 }




`;
