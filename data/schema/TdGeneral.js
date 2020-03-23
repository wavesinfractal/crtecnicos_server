export const TdGeneral = `
    
    type Query {
        totalOrdenServicio:Int
        totalClientes:Int
        totalArticulos:Int
        totalUsuarios:Int
        hora:String
        usuarioActual: UsuarioAct
        sendMail: String
    #--------------------------------------------------------- 
        getOrdenesServicio(limite:Int,offset:Int,buscar:[DataInput]):[OrdenServicio]      
        getOrdenServicio(inputId:ID):OrdenServicio 
    #--------------------------------------------------------- 
        getClientes(limite:Int,offset:Int,buscar:DataInput):[Cliente]       
        getCliente(inputId:ID):Cliente    

     
        #--------------------------------------------------------- 
        getUsuarios(limite:Int,offset:Int,buscar:[DataInput]):[Usuario]       
        getUsuario(inputId:ID):Usuario
    #--------------------------------------------------------- 
        getTecnicos(limite:Int,buscar:String):[Tecnico]
       
#---------------------------------------------------------------
       getArticulos(limite:Int,offset:Int,buscar:ArticuloInput): [Articulo]
       getArticulo(inputId:ID):Articulo        
    }
    
    type Mutation {   
        login(movil: Int!,password: String!) : Respuesta   
        CodConfirmacion(inputData:InputCodConf):String
        SendConfirmacion(inputData:InputCodConf):String
        #---------------------------------------------------------
        crearUsuario(inputData:UsuarioInput): Usuario  
        actualizarUsuario(inputData:UsuarioInput):Usuario
        eliminarUsuario(id:ID!):String  
        #---------------------------------------------------------  
        crearTecnico(inputData:TecnicoInput): Tecnico
        actualizarTecnico(inputData:ClienteInput): Tecnico
        eliminarTecnico(id:ID!):String

    #------------------------------------------------------
        crearCliente(inputData:ClienteInput): Cliente 
        actualizarCliente(inputData:ClienteInput): Cliente
        eliminarCliente(id:ID!):String    
    #---------------------------------------------------------------
    
        crearOrdenServicio(inputData:OrdenServicioInput): OrdenServicio 
        actualizarOrdenServicio(inputData:OrdenServicioInput): OrdenServicio
        cancelarOrdenServicio(id:ID!): String
        eliminarOrdenServicio(id:ID!):String  
        
        CrearBoletaReparacion(inputData:BoletaReparacionInput): BoletaReparacion
#------------------------------------------------------
        crearArticulo(inputData:ArticuloInput): Articulo 
        actualizarArticulo (inputData:ArticuloInput): Articulo
        eliminarArticulo (id:ID!):String  
    }   

    input DataInput {
        index: String
        value:String        
    }


    input InputCodConf {
        movil:Int
        email:String
        codigo:Int
    }

    type Respuesta {
        token: String
        mensaje: String
    }
    type User {
        username: String
        password: String
    }
    input InputNombre {
        nombre:String
        apellido1:String
        apellido2:String
      }
      
      type Nombre {
        nombre:String
        apellido1:String
        apellido2:String
      }

`;
