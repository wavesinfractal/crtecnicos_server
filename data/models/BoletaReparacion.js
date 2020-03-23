import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
var AutoIncrement = require("mongoose-sequence")(mongoose);
// autoIncrement.initialize(connection);
const SchemaBoletaReparacion = new mongoose.Schema({
  boleta: { type: Number, index: true },
  estado: {
    type: String,
    enum: [
      "TERMINADO",
      "PENDIENTE",
      "PXR",
      "CANCELADO_X_CLIENTE",
      "NO ENCONTRADO",
      "NO ACEPTA",
      "SIN FACTURA"
    ],
    default: "TERMINADO"
  },
  fecha_revision: { type: Date, default: Date.now },
  orden: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orden",
    required: true
  },
  tecnico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tecnicos",
    required: true
  },
  falla_encontrada: { type: String, required: true },
  solucion: { type: String, required: true },
  hora_inicio: { type: Date, default: Date.now },
  repuestos: { type: Array }
});

SchemaBoletaReparacion.plugin(AutoIncrement, {
  id: "boleta_seq",
  inc_field: "boleta",
  reference_fields: "boleta"
});
SchemaBoletaReparacion.plugin(uniqueValidator);
const modelBoletaReparacion = mongoose.model(
  "boleta_reparacion",
  SchemaBoletaReparacion
);

export default modelBoletaReparacion;
