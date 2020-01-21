import mongoose from 'mongoose';

 const CodConfirmacionSchema = new mongoose.Schema({
usuario:{ type: mongoose.Schema.Types.ObjectId,unique: true, ref: 'usuarios' },
cod: Number    
});

export const CodConfirmacion = mongoose.model( 'codconfirmacion',CodConfirmacionSchema)

// export {CodConfirmacion}




