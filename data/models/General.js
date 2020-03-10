import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
 const CodConfirmacionSchema = new mongoose.Schema({
usuario:{ type: mongoose.Schema.Types.ObjectId,unique: true, ref: 'usuarios' },
cod: Number    
});
CodConfirmacionSchema.plugin(uniqueValidator);
export const CodConfirmacion = mongoose.model( 'codconfirmacion',CodConfirmacionSchema)





