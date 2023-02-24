import express from "express";
import { ContenedorDAOProductos } from "./dbOperations/index.js";
import { router } from "./routes/index.js";

const DB = ContenedorDAOProductos;
const app = express();
export const admin = true;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", router)

const PORT = process.env.port || 8080;
app.listen(PORT, ()=>(`Server listening on port ${PORT}`));