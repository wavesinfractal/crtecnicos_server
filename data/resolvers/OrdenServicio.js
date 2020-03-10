import { modelOrdenServicio } from "../models/OrdenServicio";
import { modelTecnicos } from "../models/Tecnicos";
import { modelArticulo } from "../models/Articulo";
import { modelUsuarios } from "../models/Usuarios";

import moment from "moment";

export const OrdenServicio = {
  Query: {
    totalOrdenServicio: async (root, { cantidad }) => {
      return await modelOrdenServicio.countDocuments();
    },
    getOrdenesServicio: (root, { limite, buscar, offset }, { sesion }) => {
      // if (!sesion) {
      // 	return null
      // }
      const find = JSON.parse(buscar);
      return modelOrdenServicio
        .find(find)
        .limit(limite)
        .skip(offset)
        .populate("usuario")
        .populate('articulo')
        .populate('tecnico')
        .exec(); 
        ;
    },
    getOrdenServicio: async (root, { inputId }) => {
      try {   

        let resultado = await modelOrdenServicio
          .findOne({ _id: inputId })
          .populate("usuario")
          .populate('articulo')
          .populate('tecnico')
          .exec();          
          return resultado
      } catch (err) {
        return err
      }
    }
  },
  Mutation: {
    crearOrdenServicio: async (root, { input }) => {
      try {
      //  console.log( modelTecnicos.findOne({tecnico: input.tecnico}))
        const nuevaOrdenServicio = await new modelOrdenServicio({
          
          pendiente: true,
          revizado: false,
          estado: "PENDIENTE",
          fecha_inicio: moment().format("L"),
          fecha_programacion: moment(
            input.fecha_programacion,
            "DD-MM-YYYY"
          ).format("L"),
          usuario: input.usuario,
          tecnico: input.tecnico,
          articulo: input.articulo,
          falla: input.falla,
          direccion: input.direccion,
          telefonos: input.telefonos
        });
        nuevaOrdenServicio.id = await nuevaOrdenServicio._id;
        const salvar = await nuevaOrdenServicio.save()
        
       
        return salvar;
      } catch (err) {
        return err;
      }
    },
    actualizarCliente: async (root, { inputData }) => {
      try {
        const actualizar = await modelOrdenServicio.findOneAndUpdate(
          { _id: inputData.id },
          inputData,
          { new: true }
        );
        return actualizar;
      } catch (err) {
        console.log(`Error al actualizar ${err}`);
      }
    },

    eliminarOrdenServicio: async (root, { id }) => {
      try {
        const eliminar = await modelOrdenServicio.findByIdAndRemove({
          _id: id
        });
        eliminar;
        return "Se Borro";
      } catch (error) {
        console.log(error);
      }
    }
  }
};
