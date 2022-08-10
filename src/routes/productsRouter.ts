import Express, { Request, Response } from "express";
import { productController } from "../controllers/products.controller";

const productsRouter = Express.Router();

productsRouter.get("/", async (_req: Request, res: Response) => {
    await productController.getProductsDatabase();
    const paginatedResults = productController.paginatedResults(1);
    res.send(paginatedResults);
});

productsRouter.post("/buscar", async (req: Request, res: Response) => {
    const { product } = req.body;
    await productController.findByName(product);
    const paginatedResults = productController.paginatedResults(1);
    res.send(paginatedResults);
});

productsRouter.post("/paginado", (req: Request, res: Response)=>{
    const {page} = req.body;
    const paginatedResults = productController.paginatedResults(Number.parseInt(page));
    res.send(paginatedResults);
})

productsRouter.post("/filtrado-categoria", async(req:Request, res:Response)=>{
    const {category} = req.body;
    await productController.findByCategory(category)
    const paginatedResults = productController.paginatedResults(1);
    res.send(paginatedResults);
})

export default productsRouter;
