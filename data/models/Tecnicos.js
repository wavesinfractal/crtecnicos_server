import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcryptjs";
const schematecnicos = new mongoose.Schema({      
  lineas: Array,
  tarifas: [{ detalle: String, monto: String }],
  skills: [
    { titulo: String, detalle: String, fechaÎnicio: Date, fechafin: Date }
  ],
  raking: Number,
  zonas: [{ provincia: Number, canton: Number, horario: String }]
});

schematecnicos.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

schematecnicos.plugin(uniqueValidator);
const modelTecnicos = mongoose.model("tecnicos", schematecnicos);

export { modelTecnicos };
