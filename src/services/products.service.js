import { ContenedorDAOProductos } from "../dbOperations/index.js";
import {convertProductToDto} from "../dbOperations/dtos/products.dto.js";

class ProductsService{
    //Traer productos
    static async getProducts(){
        const products = await ContenedorDAOProductos.getAll();
        const productsDto = convertProductToDto(products);
        return productsDto;
    }
    //Traer producto por id
    static async getProductById(productId){
        const product = await ContenedorDAOProductos.getById(productId);
        const productDto = convertProductToDto(product);
        return productDto;
    }
    //Subir un nuevo producto. Solo disponible para admin
    static async uploadProduct(body){
        return await ContenedorDAOProductos.save(body)
    }
    //Actualizar producto. Solo disponible para admin
    static async updateProduct(body, id){
        return await ContenedorDAOProductos.update(body, id)
    }
    //Borrar producto por id. Solo disponible para admin
    static async deleteProductById(id){
        await ContenedorDAOProductos.deleteById(id)
    }
}

export {ProductsService};