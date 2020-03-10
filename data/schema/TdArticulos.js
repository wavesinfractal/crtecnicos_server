export const  TdArticulos = `

type Articulo {
  id: ID
  propietario: String
  serie: String
  modelo: String
  imagenes: [ImagenArticulo]
  mensaje: String
}


 input ArticuloInput {  
  propietario: String!
  serie: String !
  modelo: String!
  fechacompra: String
  imagenes: [InputImagenArticulo] 
}

type ImagenArticulo {
  imagen: String
}

input InputImagenArticulo {
  imagen:String
}



input InputHistorial {
reporte: String
}


type Historial{
reporte:String
}







`;