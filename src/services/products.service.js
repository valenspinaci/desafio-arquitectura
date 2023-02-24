import { ContenedorDAOProductos } from "../dbOperations/index.js";

class ProductsService{
    //Traer productos
    static async getProducts(){
        return await ContenedorDAOProductos.getAll()
    }
    //Traer producto por id
    static async getProductById(productId){
        await ContenedorDAOProductos.getById(productId)
    }
    //Subir un nuevo producto. Solo disponible para admin
    static async uploadProduct(body){
        await ContenedorDAOProductos.save(body)
    }
    //Actualizar producto. Solo disponible para admin
    static async updateProduct(body, id){
        await ContenedorDAOProductos.update(body, id)
    }
    //Borrar producto por id. Solo disponible para admin
    static async deleteProductById(id){
        await ContenedorDAOProductos.deleteById(id)
    }
}

export {ProductsService};