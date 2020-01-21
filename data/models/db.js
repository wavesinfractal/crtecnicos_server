require('dotenv').config();
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });


