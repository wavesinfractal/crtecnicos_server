import modelBoletaReparacion from "../models/BoletaReparacion";
import { modelOrdenServicio } from "../models/OrdenServicio";
const BoletaReparacion = {
  Query: {},
  Mutation: {
    CrearBoletaReparacion: async (root, { inputData }) => {
      try {
        const Boleta = await new modelBoletaReparacion({
          estado: inputData.estado,
          orden: inputData.orden,
          tecnico: inputData.tecnico,
          falla_encontrada: inputData.falla_encontrada,
          solucion: inputData.solucion,
          // hora_inicio: inputData.hora_inicio,
          repuestos: inputData.repuestos
        });

        const salvar = await Boleta.save();

        const actualizar = async () => {
         
        };

        if ((await salvar.estado) === "TERMINADO") {          
          try {
            const actualizar = await modelOrdenServicio.findOneAndUpdate(
              { _id: inputData.orden },
              {
                pendiente: false,
                estado: "TERMINADO"
              },
              { new: true }
            );
            if (!actualizar)
              throw new Error("No se encontro la Orden de Servicio");
          } catch (err) {
            return err;
          }
        }

        console.log(salvar);
        return salvar;
      } catch (err) {
        return err;
      }
    }
  }
};

export default BoletaReparacion;
