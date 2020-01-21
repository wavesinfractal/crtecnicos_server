import { modelOrdenServicio } from "../models/OrdenServicio";
import moment from 'moment'

export const OrdenServicio = {
  Query: {
    totalOrdenServicio: async (root,{cantidad}) => {
    return await (modelOrdenServicio.countDocuments())

    },
    getOrdenesServicio: (root, { limite, buscar ,offset}, { sesion }) => {
      // if (!sesion) {
      // 	return null
      // }
      const find =     JSON.parse(buscar) 
      return modelOrdenServicio.find(find).limit(limite).skip(offset);
    },
    getOrdenServicio: async (root, { inputId }) => {
      try {       
        return await modelOrdenServicio.findById(inputId).exec();
      } catch (err) {
        console.log("Ocurrio un Error" + err);
      }
    }
  },
  Mutation: {
    crearOrdenServicio: async (root, { inputData }) => {
      console.log(inputData);
      const nuevaOrdenServicio = new modelOrdenServicio({
        orden: inputData.orden,
        estado: 0,        
        fechainicio: moment().format("DD-MM-YYYY  h"),
        cliente: inputData.cliente,
        tecnico: inputData.tecnico,
        serie: inputData.serie,
        falla: inputData.falla,
        direccion: inputData.direccion,
        reporte: inputData.reporte
        
      });
      nuevaOrdenServicio.id = nuevaOrdenServicio._id;
      try {
        const salvar = await nuevaOrdenServicio.save();
        console.log("Guardo exitosamente los datos :D " + salvar);
        return salvar;
      } catch (err) {
        console.log("Ocurrio un Error" + err);
        res.status(500).send(err);
        
      }
    },actualizarCliente: async (root, { inputData }) => {
      try {
        const  actualizar = await modelOrdenServicio.findOneAndUpdate(
          { _id: inputData.id },
          inputData,
          { new: true }
        );
        return actualizar;
      } catch (err) {
        console.log(`Error al actualizar ${err}`);
      }
    },
    eliminarOrdenServicio:async (root,{id})=>{
       try {
         const eliminar  = await modelOrdenServicio.findByIdAndRemove({_id:id})
         eliminar
         return "Se Borro"
       } catch (error) {
         console.log(error)
       }


    }
  }
  
};