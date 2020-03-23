import { modelUsuarios } from "../models/Usuarios";
import authtoken from "../auth";
import bcrypt from "bcryptjs";
// var consolere = require('console-remote-client').connect('console.re','80','crtecnicos');
export const Usuarios = {
  Query: {
    totalUsuarios: async (root, { cantidad }) => {
      return await modelUsuarios.countDocuments();
    },
    getUsuarios: async (root, { limite, buscar, offset }, { sesion }) => {
      var objeto = new Object();
      buscar.map(data => {
        objeto[data.index] = data.value;
      });
      const data = await modelUsuarios
        .find(objeto)
        .limit(limite)
        .skip(offset)
        .populate("tecnicoid")
        .exec();
      return data;
    },
    usuarioActual: async (root, args, { sesion }) => {
      console.log(sesion);
      if (typeof sesion === "undefined" || sesion === null) {
        return { estado: "SINSESSION" };
      }
      console.log(sesion.user.movil);
      const usuario = await modelUsuarios.findOne({ movil: sesion.user.movil });

      console.log(usuario);
      if (usuario.estado === "PENDIENTE") {
        return { estado: "PENDIENTE" }; //---------------------------------Voyn por aqui, necesito ver como
      }

      return usuario; //---------------------------------Voyn por aqui, necesito ver como
    }
  },
  Mutation: {
    crearUsuario: async (root, { inputData }) => {
      const existemovil = await modelUsuarios.findOne({
        movil: inputData.movil
      });

      const existemail = await modelUsuarios.findOne({
        email: inputData.email
      });

      if (existemovil) {
        return { mensaje: "El Movil ya existe" };
      }
      if (existemail) {
        return { mensaje: "El Email ya existe" };
      }
      const nuevoUsuario = await new modelUsuarios({
        movil: inputData.movil,
        email: inputData.email,
        cedula: inputData.cedula,
        password: inputData.password,
        nombre: inputData.nombre,
        foto: inputData.foto,
        zona: inputData.zona,
        direccion: inputData.direccion,
        telefonos: inputData.telefonos,
        empresa: inputData.empresa,
        nacimiento: inputData.nacimiento,
        status: false
      }).save();
      nuevoUsuario.mensaje = "Se a creado la cuenta";
      return nuevoUsuario;
    },
    login: async (root, { movil, password }) => {
      try {
        const existeUsuario = await modelUsuarios.findOne({
          movil
        });

        if (!existeUsuario) {
          return { mensaje: "El usuario no  existe" };
        } else {
          const compararPass = await bcrypt.compare(
            password,
            existeUsuario.password,
            null
          );
          if (!compararPass) {
            // Si el password es incorrecto da un error y detiene la pila
            return { mensaje: "El Password es incorrecto" };
          }
          // console.log(existeUsuario)
          return {
            mensaje: "Bienvenido",
            token: authtoken(existeUsuario, "passsecreto", "1hr")
          }; //Si se Pasa los filtros anteriores, devuelve el token
        }
      } catch (error) {
        return error;
      }
    },
    actualizarUsuario: async (root, { inputData }) => {
      try {
        const existeUsuario = await modelUsuarios.findById({
          _id: inputData.id
        });
        if (!existeUsuario) {
          return { mensaje: "El usuario no  existe" };
        } else {
          const actualizar = await modelUsuarios.findOneAndUpdate(
            { _id: inputData.id },
            inputData,

            { new: true }
          );

          actualizar.mensaje = "Se Actualizaron los datos correctamente.";
          return actualizar;
        }
      } catch (err) {
        console.log(`Error al actualizar ${err}`);
        return { mensaje: err };
      }
    },
    eliminarUsuario: async (root, { id }) => {
      console.re.log("Se Elimino");
      try {
        const eliminar = await modelUsuarios.findByIdAndRemove({ _id: id });
        eliminar;
        return "Se Elimino Correctamente";
      } catch (error) {
        console.log(error);
      }
    }
  }
};
