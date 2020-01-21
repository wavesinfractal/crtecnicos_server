import {modelTecnicos} from '../models/Tecnicos';

export const Tecnicos = {
  Query: {
      getTecnicos:  async (root,{limite,buscar}) => {
            var find = JSON.parse(buscar);
            return await modelTecnicos.find(find).limit(limite).exec();       
      }
 
  },
  Mutation: {
    crearTecnico: async (root,  { inputData }) => {   
      try {
        const existecedula = await modelTecnicos.findOne({
          email: inputData.email
        });
        const existemovil = await modelTecnicos.findOne({
          movil: inputData.movil
        });
        const existemail = await modelTecnicos.findOne({
          email: inputData.email
        });
        if (existemovil || existemail || existecedula) {
          return { mensaje: "El usuario ya existe" };
        }
        const nuevoTecnico = await new modelTecnicos({
          cedula: inputData.cedula,
          movil: inputData.movil,
          email: inputData.email,
          nombre: inputData.nombre,      
          telefonos: inputData.telefonos,         
          zona: inputData.zona,
          direccion:inputData.direccion,      
          lineas: inputData.lineas,      
          tarifas: inputData.tarifas,
          skills: inputData.skills,
          raking: inputData.raking,
          zonas: inputData.zonas
        })
         nuevoTecnico.id = nuevoTecnico._id;         

        return  await nuevoTecnico.save();           
      } catch (error) {       
        console.log(`Error al guardar` + error);
      }
    },actualizarTecnico: async (root, { inputData }) => {
      try {
        const  actualizar = await nuevoTecnico.findOneAndUpdate(
          { _id: inputData.id },
          inputData,
          { new: true }
        );
        return actualizar;
      } catch (err) {
        console.log(`Error al actualizar ${err}`);
      }
    },
    eliminarTecnico:async (root,{id})=>{
       try {
         const eliminar  = await modelTecnicos.findByIdAndRemove({_id:id})
         eliminar
         return "Se Elimino Correctamente"
       } catch (error) {
         console.log(error)
       }


    }
  }
};


