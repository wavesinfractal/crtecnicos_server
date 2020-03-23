
export const TdUsuarios =
`
type Usuario {    
	id:ID
	movil: Int
	email: String 
	cedula: Int
	nombre: Nombre	
	imagenes: [Imagen]
	rol: String	
	foto: String
	zona: Zona
	direccion: String
	telefonos: [Int]
	empresa: String
	nacimiento: String
	status: Boolean
	tecnicoid: Tecnico
	mensaje: String 	
}

input UsuarioInput {   
    movil: Int!
    email: String!
	cedula: Int!
    password: String!
	nombre: InputNombre!
	imagenes: [Imageninput]
	rol: String			
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

  input Imageninput{
	tipo: String
	url:  String
   }
   type Imagen{
	tipo: String
	url:  String
   }

  `;

