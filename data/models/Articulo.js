import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const schemaArticulo = new mongoose.Schema({
  propietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuarios",
    require: [true, "El campo usuarios es requerido"]
  },
  serie: {
    type: String,
    unique: true,
    require: [true, "La serie del Articulo es requerida."]
  },
  modelo: {    type: String,
    
    require: [true, "El modelo del articulo es requerido."]
  },
  fechacompra: { type: Date },
  imagenes: Array
});


schemaArticulo.plugin(uniqueValidator);
const modelArticulo = mongoose.model("articulos", schemaArticulo);

export { modelArticulo };
