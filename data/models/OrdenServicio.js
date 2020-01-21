import mongoose from "mongoose";
var AutoIncrement = require("mongoose-sequence")(mongoose);
// autoIncrement.initialize(connection);
const SchemaOrdenServicio = new mongoose.Schema({
  orden: { type: Number, index: true, unique: true },
  estado: Number,
  fechainicio: String,
  cliente:{ type: mongoose.Schema.Types.ObjectId, ref: "clientes" },
  tecnico: { type: mongoose.Schema.Types.ObjectId, ref: "tecnicos" },
  serie: { type: mongoose.Schema.Types.ObjectId, ref: "articulos" },
  falla: String,
  direccion: String,
  reporte: Number
});

SchemaOrdenServicio.plugin(AutoIncrement, {
  id: "order_seq",
  inc_field: "orden"
  // reference_fields: "orden"
});
const modelOrdenServicio = mongoose.model("ordenServicio", SchemaOrdenServicio);

export { modelOrdenServicio };
