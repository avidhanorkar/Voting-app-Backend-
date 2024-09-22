import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import candidateRoutes from '../routes/CandidateRoutes.js';
import userRoutes from '../routes/UserRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.listen(PORT, () => {
  console.log('listening on port 3001');
});