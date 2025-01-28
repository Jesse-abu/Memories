import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import postRoute from './routes/post.js'

const app = express();

app.use(bodyParser.json({ limit:'30mb', extended:true }));
app.use(bodyParser.urlencoded({ limit:'30mb', extended:true }));
app.use(cors());
app.use("/posts", postRoute);


const C_URL = 'mongodb+srv://abujesse296:ajesse123@c-x23.hmeob.mongodb.net/?retryWrites=true&w=majority&appName=C-x23'
const PORT = process.env.PORT || 5000;

mongoose.connect(C_URL, { useNewUrlParser:true, useUnifiedTopology:true })
.then(() => app.listen(PORT, () => console.log(`Server running on : http://localhost:${PORT}`)))
.catch((err) => console.log(`${err} connection disabled`));

mongoose.set('overwriteModels', false)