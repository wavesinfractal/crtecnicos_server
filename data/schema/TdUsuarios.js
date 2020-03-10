
export const TdUsuarios =
`
type Usuario {    
	id:ID
	movil: Int
	email: String 
	cedula: Int
	nombre: Nombre		
	foto: String
	zona: Zona
	direccion: String
	telefonos: [Int]
	empresa: String
	nacimiento: String
	status: Boolean
	mensaje: String 	
}

input UsuarioInput {   
    movil: Int!
    email: String!
	cedula: Int!
    password: String!
	nombre: InputNombre!		
	foto: String
	zona: InputZona
	direccion: String
	telefonos: [Int]
	empresa: String
	nacimiento: String 
}

type UsuarioAct {	
	id:ID
	movil: Int
	email: String	
	cedula: Int
	nombre: Nombre		
	foto: String
	zona: Zona	    
	mensaje: String 
	status: Boolean
  }

   
  `;

