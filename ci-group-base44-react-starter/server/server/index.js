import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/contact', contactRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ API démarrée sur le port ${PORT}`));
