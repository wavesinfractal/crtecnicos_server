import moment from "moment";
import { sendEmail } from "./Email";
import { modelUsuarios } from "../models/Usuarios";
import { CodConfirmacion } from "../models/General";
// import nodemailer from 'nodemailer'

export const General = {
  Query: {
    hora: (root, { args }) => {
      return moment().format("DD-MM-YYYY");
    },

    sendMail: () => {
      sendEmail(
        "nulluser29@gmail.com",
        "Asunto Del Correo",
        "Hola Aqui provando"
      );

      return "hola";
    }
  },
  Mutation: {
    CodConfirmacion: async (root, { inputData }) => {
      // console.log(inputData);
      // var NuevoCodigo = null;
      const existemovil = await modelUsuarios.findOne({
        movil: inputData.movil
      });

      const existemail = await modelUsuarios.findOne({
        email: inputData.email
      });
console.log(existemail)
      if (existemail) {
        const code = Math.floor(Math.random() * 99999) + 10000
        // console.log(existemovil);
        const upsertedId = await CodConfirmacion.updateOne(
          { usuario: existemail._id },
          { cod: code },
          { new: true,upsert:true }
        );      
        if (upsertedId) {
          await sendEmail(
            existemail.email,
            "Asunto Codigo de Confirmacion CrTecnicos",
            code
          );
          return  "Codigo Generado";
        }
      } else {
        return "El Usuario no existe";
      }
    },
    SendConfirmacion: async (root, { inputData }) => {
      const { codigo, movil, email } = inputData;
      console.log(inputData)
      const existemovil = await modelUsuarios.findOne({
        movil: movil
      });

      const existemail = await modelUsuarios.findOne({
        email: email
      });
       console.log(existemail)
      if (existemovil || existemail ) {
      const id = existemail._id

        const elCodigo = await CodConfirmacion.findOne({
          usuario: id
        });

        if (!elCodigo) {
          return "Sin Codigo de Confirmacion";
        }
        if (codigo === elCodigo.cod) {
          console.log(elCodigo._id)
          await CodConfirmacion.findByIdAndRemove({_id: elCodigo._id})
          return( ConfirmarUsuario(id))
        } else {
        return  ("No es igual");
        }
      } else {
        return "El usuario no existe";
      }
    }
  }
};


const ConfirmarUsuario = async id => {
  await modelUsuarios.findOneAndUpdate(
    { _id: id },
    { estado: "CONFIRMADO" },
    { new: true }
  );
  return "Usuario Confirmado"
};
