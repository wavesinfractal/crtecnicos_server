import { modelArticulo } from "../models/Articulo";
 const  Articulos = {
  Query: {
    totalArticulos: async (root, { cantidad }) => {
      return await modelArticulo.countDocuments();
    },
    getArticulos: (root, { limite, buscar, offset }, { sesion }) => {
      // if (!sesion) {
      // 	return null
      // }

      return modelArticulo
        .find(buscar)
        .limit(limite)
        .skip(offset);
    },
    getArticulo: async (root, { inputId }) => {
      try {
        return await modelArticulo.findById(inputId).exec();
      } catch (err) {
        console.log("Ocurrio un Error" + err);
      }
    }
  },
  Mutation: {
    crearArticulo: async (root, { inputData }) => {
      console.log(inputData);
      const nuevoArticulo = new modelArticulo({
        propietario: inputData.propietario,
        serie: inputData.serie,
        modelo: inputData.modelo,
        imagenes: inputData.imagenes,
        historial: inputData.historial,
        proxmantenimiento: inputData.proxmantenimiento,           
      });
      nuevoArticulo.id = nuevoArticulo._id;
      try {
        const salvar = await nuevoArticulo.save();
        console.log("Guardo exitosamente los datos :D " + salvar);
        return salvar;
      } catch (err) {
        console.log("Ocurrio un Error" + err);
        res.status(500).send(err);
      }
    },
    actualizarArticulo: async (root, { inputData }) => {
      try {
        const actualizar = await modelArticulo.findOneAndUpdate(
          { _id: inputData.id },
          inputData,
          { new: true }
        );
        return actualizar;
      } catch (err) {
        console.log(`Error al actualizar ${err}`);
      }
    },
    eliminarArticulo: async (root, { id }) => {
      try {
        const eliminar = await modelArticulo.findByIdAndRemove({ _id: id });
        eliminar;
        return "Se Borro";
      } catch (error) {
        console.log(error);
      }
    }
  }
};
 export {Articulos}