import { ContenedorDAOProductos } from "../dbOperations/index.js";

class ProductsService{
    //Traer productos
    static async getProducts(){
        return await ContenedorDAOProductos.getAll()
    }
    //Traer producto por id
    static async getProductById(productId){
        return await ContenedorDAOProductos.getById(productId);
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