
export const TdTecnicos = 


`
input TecnicoInput {
  id: ID
  cedula: Int
  movil:Int
  email: String
  nombre: InputNombre  
  telefonos:[InputTelefono] 
  zona: InputZona
  lineas: [InputLineasTec]
  tarifas: [InputTarifaTec]
  skills: [InputSkills]
  raking: Float
  zonas: [InputZonaTec]
}
type Tecnico {
  id: ID
  cedula: Int
  movil:Int
  nombre: Nombre 
  email: String  
  telefonos:[Telefono] 
  zona: Zona    
  lineas: [LineasTec]
  tarifas: [TarifaTec]
  skills: [Skills]
  raking: Float
  zonas: [ZonaTec]
  mensaje: String
}


#*---------------------------Correo
input InputSkills{
  titulo: String
  detalle: String
  fechaInicio: String
  fechafin: String 
}

type Skills{
  titulo: String
  detalle: String
  fechaInicio: String
  fechafin: String 
}




type Telefono {
telefono: Int
}
input InputTelefono {
  telefono: Int
}


type LineasTec {
  id: String
}
input InputLineasTec {
  id: String
}
#----------------------------------ZONAS
type ZonaTec {
  provincia:Int
  canton:Int
  horario:Int
}
input InputZonaTec {
  provincia:Int
  canton:Int
  horario:Int
}
#-----------------------------------TARIFAS
type TarifaTec {
  detalle: String
  Monto: Int
}
input InputTarifaTec {
  detalle: String
  Monto: Int
}
#----------------------------------Curriculum
type CurriculumTec {
  titulos: String
  descripcion: String
  adjuntos: String
}
input InputCurriculumTec {
  titulos: String
  descripcion: String
  adjuntos: String
}
`;