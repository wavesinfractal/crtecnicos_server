import { modelTecnicos } from "../models/Tecnicos";

export const Tecnicos = {
  Query: {
    getTecnicos: async (root, { limite, buscar }) => {
      var find = JSON.parse(buscar);
      return await modelTecnicos
        .find(find)
        .limit(limite)
        .exec();
    }
  },
  Mutation: {
    crearTecnico: async (root, { inputData }) => {
      try {       
        const nuevoTecnico = await new modelTecnicos({
          cedula: inputData.cedula,
          movil: inputData.movil,
          email: inputData.email,
          nombre: inputData.nombre,
          password: inputData.password,
          telefonos: inputData.telefonos,
          zona: inputData.zona,
          direccion: inputData.direccion,
          imagenes: inputData.imagenes,
          lineas: inputData.lineas,
          tarifas: inputData.tarifas,
          skills: inputData.skills,
          raking: inputData.raking,          
          zonas: inputData.zonas
        });
        nuevoTecnico.id = nuevoTecnico._id;
        await nuevoTecnico.save();
      } catch (err) {
        return err;
      }
    },

    actualizarTecnico: async (root, { inputData }) => {
      try {
        const actualizar = await nuevoTecnico.findOneAndUpdate(
          { _id: inputData.id },
          inputData,
          { new: true }
        );
        return actualizar;
      } catch (err) {
        return err;
      }
    },

    eliminarTecnico: async (root, { id }) => {
      try {
        const eliminar = await modelTecnicos.findByIdAndRemove({ _id: id });
        eliminar;
        return "Se Elimino Correctamente";
      } catch (error) {
        console.log(error);
      }
    }
  }
};
