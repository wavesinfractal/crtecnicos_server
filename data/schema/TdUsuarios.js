
export const TdUsuarios =
 `
input UsuarioInput {
  id:ID
    movil: Int!
    email: String!
    password: String!
	cedula: Int!
	nombre: InputNombre!	
	rol: String
	foto: String
	tecnicos :String
	articulos : String
	zona: InputZona
	direccion: String
	empresa: String
	nacimiento: String
  tiposervicio:  String    
  
}
type Usuario {    
  id:ID
  movil: Int
  email: String 
	cedula: Int
	nombre: Nombre	
	rol: String
	foto: String
	tecnicos :String
	articulos : String
	zona: Zona
	direccion: String
	empresa: String
	nacimiento: String
  tiposervicio:  String    
  estado: Estado
  mensaje: String 

}

type UsuarioAct {	
	id:ID
	movil: Int
	email: String	
	cedula: Int
	nombre: Nombre
	apellido: String
	rol: String
	foto: String
	zona: Zona	    
	mensaje: String 
	estado: Estado
  }

  enum Estado {
	SINSESSION
	PENDIENTE
	CONFIRMADO
	FAULT
  }
 
 
  `;

