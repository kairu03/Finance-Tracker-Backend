// What is an Endpoint?
// An endpoint is a combination of URL + HTTP method that lets the client interact with a specific resource
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import { rateLimiter } from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(
  cors({
    origin: 
    ['http://localhost:5173',
    'https://finance-tracker-kairu03.vercel.app/']
  }));

// middleware
// this will allow you to get access to req.body or will parse JSON bodies
app.use(express.json());
app.use(rateLimiter);


// simple custom middleware
// app.use((req,res,next)  => {
//   console.log(`Req method is ${req.method} and Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
  });
});




