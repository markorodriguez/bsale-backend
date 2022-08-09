import { Product, Iproduct } from "../models/products.model";

import db from "../config/db";

class ProductController {
    private products: any = [];

    //Obtener los productos desde la BD
    async getProductsDatabase() {
        const foundProducts: Array<Iproduct> = [];

        try {
            const [rows]: any = await db
                .promise()
                .query(
                    "SELECT *, c.name as namecat, p.name as name FROM product p JOIN category c ON p.category = c.id"
                );

            rows.map((element: Iproduct) => {
                const newProd = new Product(element);
                foundProducts.push(newProd);
            });

            this.products = foundProducts;
        } catch (error) {
            console.log(error);
        }
    }

    //Obtener producto por nombre
    async findByName(productName: string) {
        const foundProductsName: Array<Iproduct> = [];

        try {
            const [rows]: any = await db
                .promise()
                .query(
                    `SELECT *, c.name as namecat, p.name as name FROM product p JOIN category c ON p.category = c.id  WHERE p.name LIKE concat('%',?,'%')`,
                    [productName]
                );

            rows.map((element: Iproduct) => {
                const newProd = new Product(element);
                foundProductsName.push(newProd);
            });

            this.products = foundProductsName;
        } catch (error) {
            console.log(error);
        }
    }

    //Obtener productos por categoría
    async findByCategory(productCategory: string){
        const foundProductsCat: Array<Iproduct> = []

        try {
            const [rows]: any = await db
                .promise()
                .query(
                    `SELECT *, c.name as namecat, p.name as name FROM product p JOIN category c ON p.category = c.id  WHERE c.id LIKE concat('%',?,'%')`,
                    [productCategory]
                );

            rows.map((element: Iproduct) => {
                const newProd = new Product(element);
                foundProductsCat.push(newProd);
            });

            this.products = foundProductsCat;
        } catch (error) {
            console.log(error);
        }
    }

    //Generar paginación
    paginatedResults(page: number): Object {

        const limit = 8;

        const totalProducts = this.products.length;
        const totalPages = Math.round(totalProducts / limit);
        const pagePagination = page > totalPages ? 1 : page;

        const startIndex = (pagePagination - 1) * limit;
        const endIndex = pagePagination * limit;

        const paginationResult: any = {};

        if (endIndex < totalProducts) {
            paginationResult.next = {
                page: pagePagination + 1,
            };
        }

        if (startIndex > 0) {
            paginationResult.previous = {
                page: pagePagination - 1,
            };
        }

        if (totalProducts === 0 || totalProducts === undefined) {
            paginationResult.numberOfPages = 0;
        } else {
            paginationResult.numberOfPages = totalProducts < limit ? 1 : totalPages;
        }

        paginationResult.results = [...this.products].slice(startIndex, endIndex);

        return paginationResult;
    }
}

export const productController = new ProductController();
