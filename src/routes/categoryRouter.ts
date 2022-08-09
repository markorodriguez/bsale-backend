import Express, { Request, Response } from "express";
import { categoryController } from "../controllers/category.controller";

const categoryRouter = Express.Router();

categoryRouter.get("/", async (_req: Request, res: Response) => {
  const categoriesToShow: any = [];

  await categoryController.getCategoriesDatabase()

  const categoryList = categoryController.getCategories();

  categoryList.forEach((category) => {
    categoriesToShow.push({
      id: category.id,
      name:
        category.name.charAt(0).toUpperCase() +
        category.name.slice(1, category.name.length),
    });
  });

  res.send(categoriesToShow);
});

export default categoryRouter;
