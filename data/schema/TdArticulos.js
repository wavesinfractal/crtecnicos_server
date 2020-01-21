export const  TdArticulos = `

type Articulo {
  id: ID
  propietario: String
  serie: String
  modelo: String
  imagenes: [ImagenArticulo]
  historial: [Historial]
  proxmantenimiento: String
}


input ArticuloInput {
  id: ID
  propietario: String
  serie: String 
  modelo: String
  imagenes: [InputImagenArticulo]
  historial: [InputHistorial]
  proxmantenimiento: String
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