import { General } from "./General";
import { Clientes } from "./Clientes";
import { Usuarios } from "./Usuarios";
import { Tecnicos } from "./Tecnicos";
import { OrdenServicio } from "./OrdenServicio";
import { Articulos } from "./Articulos";

import { merge } from "lodash";

export const resolvers = merge(
  Usuarios,
  Tecnicos,
  Clientes,
  OrdenServicio,
  Articulos,
  General

);
