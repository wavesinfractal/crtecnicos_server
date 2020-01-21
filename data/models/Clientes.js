import mongoose from 'mongoose';

const clientesSchema = new mongoose.Schema({
	cedula: String,
	nombre: String,
	apellido: String,
	empresa: String,
	emails: Array,
	edad: Number,
	tipo: String,
	pedidos: Array
});

const modelClientes = mongoose.model('clientes', clientesSchema);
export { modelClientes };
