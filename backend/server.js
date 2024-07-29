import express from 'express'
import userRouter from './routes/userRoute.js'
import connectDB from './config/dbConnect.js';
import cors from 'cors';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/user', userRouter);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
