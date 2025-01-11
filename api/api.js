import express from "express";
import cors from "cors";
import databaseConfig from "./database/databaseConfig.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);

databaseConfig.startDatabase();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
