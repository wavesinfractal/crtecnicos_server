import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
var AutoIncrement = require("mongoose-sequence")(mongoose);
// autoIncrement.initialize(connection);
const SchemaOrdenServicio = new mongoose.Schema({
  orden: { type: Number, index: true },
  pendiente: Boolean,
  revizado: Boolean,
  estado: {
    type: String,
    enum: ["PENDIENTE", "PENDIENTE REPUESTO", "NO ENCONTRADO"],
    default: "PENDIENTE"
  },
  fecha_inicio: Date,
  fecha_programacion: Date,
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuarios",
    required: true
  },
  tecnico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tecnicos",
    required: true
  },
  articulo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "articulos",
    required: true
  },
  falla: { type: String, required: true },
  direccion: { type: String, required: true },
  telefonos: [{ type: Number }],
  boletas: [{ type: Number, required: true }]
});

SchemaOrdenServicio.plugin(AutoIncrement, {
  id: "order_seq",
  inc_field: "orden",
  reference_fields: "orden"
});
SchemaOrdenServicio.plugin(uniqueValidator);
const modelOrdenServicio = mongoose.model("ordenServicio", SchemaOrdenServicio);

export { modelOrdenServicio };
