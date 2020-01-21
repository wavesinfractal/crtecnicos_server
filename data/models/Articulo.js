import mongoose from "mongoose";

const schemaArticulo = new mongoose.Schema({
  propietario: { type:  mongoose.Schema.Types.ObjectId, ref: "usuarios" } ,
  serie: String,
  modelo: String,
  imagenes: Array,
  historial: [{reporte:{ type:  mongoose.Schema.Types.ObjectId, ref: "usuarios"} }],
  proxmantenimiento: Date
  
});

const modelArticulo = mongoose.model("articulos", schemaArticulo);

export { modelArticulo };
