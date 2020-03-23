export const  TdArticulos = `

type Articulo {
  id: ID
  propietario: String
  serie: String
  modelo: String
  descripcion: String
  fechacompra: String
  imagenes: [ImagenArticulo]
  mensaje: String
}


 input ArticuloInput {  
  propietario: String
  serie: String 
  modelo: String
  descripcion: String
  fechacompra: String
  imagenes: [InputImagenArticulo] 
}

type ImagenArticulo {
  thumb: String
  imagen: [String]
}

input InputImagenArticulo {
  thumb: String
  imagen: [String]
}



input InputHistorial {
reporte: String
}


type Historial{
reporte:String
}







`;