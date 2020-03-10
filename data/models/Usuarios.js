import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  movil: { type: Number, unique: true, require: [true, "El campo requerido"] },
  email: { type: String, unique: true, require: [true, "El campo requerido"] },
  cedula: { type: Number, unique: true, require: [true, "El campo requerido"] },
  password: { type: String, require: [true, "El campo requerido"] },
  nombre: { nombre: String, apellido1: String, apellido2: String },
  foto: String,
  zona: { provincia: Number, canton: Number, distrito: Number },
  direccion: { type: String, require: [true, "El campo requerido"] },
  telefonos: [Number],
  empresa: String,
  nacimiento: String,
  status: { type: Boolean }
});

userSchema.pre("save", function(next) {
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
userSchema.plugin(uniqueValidator);
const modelUsuarios = mongoose.model("usuarios", userSchema);
export { modelUsuarios };
