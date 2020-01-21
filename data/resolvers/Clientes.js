import { modelClientes } from "../models/Clientes";


export const Clientes = {
  Query: {
    totalClientes: async (root,{cantidad}) => {
    return await (modelClientes.countDocuments())

    },
    getClientes: (root, { limite, buscar ,offset}, { sesion }) => {
      // if (!sesion) {
      // 	return null
      // }

      return modelClientes.find(buscar).limit(limite).skip(offset);
    },
    getCliente: async (root, { inputId }) => {
      try {       
        return await modelClientes.findById(inputId).exec();
      } catch (err) {
        console.log("Ocurrio un Error" + err);
      }
    }
  },
  Mutation: {
    crearCliente: async (root, { inputData }) => {
      console.re.log(inputData)
      console.log(inputData);
      const nuevoCliente = new modelClientes({
        nombre: inputData.nombre,        
        apellido: inputData.apellido,
        empresa: inputData.empresa,
        emails: inputData.emails,
        tipo: inputData.tipo,
        edad: inputData.edad,
        pedidos: inputData.pedidos
      });
      nuevoCliente.id = nuevoCliente._id;
      try {
        const salvar = await nuevoCliente.save();
        console.log("Guardo exitosamente los datos :D " + salvar);
        return salvar;
      } catch (err) {
        console.log("Ocurrio un Error" + err);
        res.status(500).send(err);
      }
    },actualizarCliente: async (root, { inputData }) => {
      console.log("ok funciono")
      console.log(inputData)
      try {
        const  actualizar = await modelClientes.findOneAndUpdate(
          
          { _id: inputData.id },
          inputData,
          { new: true }
        );
        
        console.log(actualizar)
        return actualizar;
      } catch (err) {
        console.log(`Error al actualizar ${err}`);
      }
    },
    eliminarCliente:async (root,{id})=>{
      console.re.log("Se Elimino");
       try {
         const eliminar  = await modelClientes.findByIdAndRemove({_id:id})
         eliminar
         return "Se Elimino Correctamente"
       } catch (error) {
         console.log(error);
       }


    }
  }
  
};
