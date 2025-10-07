import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import taskRoutes from './routes/taskRoutes.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());


const mongoURI = process.env.mongodbapi;
const port = process.env.PORT || 3000;
main();

async function main() {
  try{
    await mongoose.connect(mongoURI);
    console.log('Server is connected to the database');
  }
  catch(err){
    console.log(`Server is not connected to the database: ${err}`);    
  }
}


app.use("/", taskRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})