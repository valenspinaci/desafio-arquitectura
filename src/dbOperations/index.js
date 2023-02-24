import {productsCollection, productsSchema} from "./models/products.model.js";
import { connectMongoDB } from "../config/dbConnection.js";
import { connectFirebase } from "../config/dbConnection.js";

let ContenedorDAOProductos;

let databaseType = "mongo";

if(databaseType == "archivos"){
    const {ProductsDAOArchivos} = await import ("./daos/productsArchivos.js");
    ContenedorDAOProductos = new ProductsDAOArchivos("./dbTxt/products.txt");
} else if(databaseType == "mongo"){
    connectMongoDB()
    const {ProductsDAOMongo} = await import ("./daos/productsMongo.js");
    ContenedorDAOProductos = new ProductsDAOMongo(productsCollection, productsSchema);
} else if(databaseType == "firebase"){
    connectFirebase()
    const {ProductsDAOFirebase} = await import ("./daos/productsFirebase.js");
    ContenedorDAOProductos = new ProductsDAOFirebase("productos");
}

export {ContenedorDAOProductos};