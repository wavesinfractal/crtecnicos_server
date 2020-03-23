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
      var objeto = new Object();
      buscar.map(data => {
        objeto[data.index] = data.value;
      });
        
      return modelOrdenServicio
        .find(objeto)
        .limit(limite)
        .skip(offset)
        .populate("usuario")
        .populate("articulo")
        .populate("tecnico")
        .exec();
    },
    getOrdenServicio: async (root, { inputId }) => {
      try {
        let resultado = await modelOrdenServicio
          .findOne({ _id: inputId })
          .populate("usuario")
          .populate("articulo")
          .populate("tecnico")
          .exec();
        return resultado;
      } catch (err) {
        return err;
      }
    }
  },
  Mutation: {
    crearOrdenServicio: async (root, { inputData }) => {
      try {
        console.log(inputData)
        //  console.log( modelTecnicos.findOne({tecnico: input.tecnico}))
        const nuevaOrdenServicio = await new modelOrdenServicio({
          pendiente: true,
          revizado: false,
          estado: "PENDIENTE",
          fecha_inicio: moment().format("L"),
          fecha_programacion: moment(
            inputData.fecha_programacion,
            "DD-MM-YYYY"
          ).format("L"),
          usuario: inputData.usuario,
          tecnico: inputData.tecnico,
          articulo: inputData.articulo,
          falla: inputData.falla,
          direccion: inputData.direccion,
          telefonos: inputData.telefonos
        });
        nuevaOrdenServicio.id = await nuevaOrdenServicio._id;
        const salvar = await nuevaOrdenServicio.save();

        return salvar;
      } catch (err) {
        return err;
      }
    },
    actualizarOrdenServicio: async (root, { inputData }) => {
      inputData.fecha_inicio = moment(
        inputData.fecha_programacion,
        "DD-MM-YYYY"
      ).format("L");
      inputData.fecha_programacion = moment(
        inputData.fecha_programacion,
        "DD-MM-YYYY"
      ).format("L");
      console.log(inputData.fecha_inicio);
      try {
        const actualizar = await modelOrdenServicio.findOneAndUpdate(
          { _id: inputData.id },
          { falla: inputData.falla },
          { new: true }
        );
        if (!actualizar) throw new Error("No se encontro la Orden de Servicio");
        return actualizar;
      } catch (err) {
        return err;
      }
    },
    cancelarOrdenServicio: async (root, { id }) => {
      console.log(id);
      try {
        const actualizar = await modelOrdenServicio.findOneAndUpdate(
          { _id: id },
          { pendiente: false, estado: "CANCELADO_X_CLIENTE" },
          { new: false }
        );
        if (!actualizar) throw new Error("No se encontro la Orden de Servicio");
        return "Se a cancelado la orden";
      } catch (err) {
        console.log(err);
        return err;
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
