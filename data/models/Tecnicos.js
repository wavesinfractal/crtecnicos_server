import mongoose from 'mongoose';

const schematecnicos = new mongoose.Schema({
  cedula:{ type: Number, unique: true, require: [true, "El campo requerido"] },
  movil: { type: Number, unique: true, require: [true, "El campo requerido"] },
  email: { type: String, unique: true, require: [true, "El campo requerido"] },
  password: String,
  nombre: { nombre: String, apellido1: String, apellido2: String },  
  telefonos: Array,
  zona: { provincia: Number, canton: Number, distrito: Number },
  direccion: String,
  lineas: Array,
  tarifas: [{ detalle:String , monto : String}],
  skills: [{ titulo: String, detalle: String, fechaÎnicio: Date,fechafin:Date }],
  raking: Number,
  zonas:  [{ provincia: Number ,canton: Number, horario: String }]
});

const modelTecnicos = mongoose.model("tecnicos", schematecnicos);

export { modelTecnicos };

