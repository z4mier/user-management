import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/user";
import { AppDataSource } from "./config/ormconfig";

const app = express();
app.use(express.json());

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
