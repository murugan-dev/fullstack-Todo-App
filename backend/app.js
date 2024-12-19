import express from "express";

import todoRoutes from './routes/toDoRoutes.js';
import { PORT } from "./utills/constants.js";

const app = express();

app.use(express.json());
app.use('/todos', todoRoutes);

app.get('/', todoRoutes)

app.listen(PORT, () => {
  console.log(`APP  is running in ${PORT} PORT`);
});
