import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.js"
import postRoutes from "./routes/posts.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes)
app.get('/', (req, res) => {
  res.send('Welcome to the Ajira Club API!');
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
