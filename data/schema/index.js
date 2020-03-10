import {importSchema} from 'graphql-import'

import {TdGeneral} from './TdGeneral';
import {TdClientes} from './TdClientes';
import {TdTecnicos} from './TdTecnicos';
import {TdOrdenServicio} from './OrdenServicio';
import {TdArticulos} from './TdArticulos'
import {TdUsuarios} from './TdUsuarios'
import {TdZonas} from './TdZonas'




// const ty = importSchema('data/schema/TdClientes.graphql')
// const type3 = importSchema('data/schema/TdTecnicos.graphql')
// const general = importSchema('data/schema/TdGeneral.graphql')

const typeDefs = TdGeneral + TdClientes + TdTecnicos  + TdArticulos + TdUsuarios + TdZonas + TdOrdenServicio
 

// const typeDefs = [
//     general,
//     ty,
//     type3,
//   ];

export  {typeDefs};
  

