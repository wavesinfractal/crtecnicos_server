export const TdClientes = `

type Cliente {
  id: ID
  nombre: String
  apellido: String
  empresa: String
  emails: [Email]
  edad: Int
  tipo: TipoCliente
  pedidos: [Pedido]
}

enum TipoCliente {
  BASICO
  PREMIUM
}
"""
Para los Clientes Nuevos
"""
input ClienteInput {
  id: ID
  nombre: String
  apellido: String
  empresa: String
  emails: [EmailInput]
  edad: Int
  tipo: TipoCliente
  pedidos: [PedidoInput]
}

type Email {
  email: String
}

input EmailInput{
  email: String
}

type Pedido {
  producto: String
  precio: Int
}
input PedidoInput {
  producto: String
  precio: Int
}

`;