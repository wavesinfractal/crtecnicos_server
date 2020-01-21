import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  movil: { type: Number, unique: true, require: [true, "El campo requerido"] },
  email: { type: String, unique: true, require: [true, "El campo requerido"] },
  password: String,
  cedula: Number,
  nombre: { nombre: String, apellido1: String, apellido2: String },    
  rol: String,
  foto: String,
  tecnicos: { type: mongoose.Schema.Types.ObjectId, ref: "tecnicos" },
  articulos: { type: mongoose.Schema.Types.ObjectId, ref: "articulos" },
  zona: {provincia:Number,canton:Number,distrito:Number},
  direccion: String,
  empresa: String,
  nacimiento: String,
  tiposervicio: String,
  estado:{ type: String, enum:["PENDIENTE", "CONFIRMADO", "FAULT" ]}
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

const modelUsuarios = mongoose.model("usuarios", userSchema);
export { modelUsuarios };
