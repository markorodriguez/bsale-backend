import {Icategory} from "../models/category.model";

import db from "../config/db";

class CategoryController {
    
    private categories: Array<Icategory> = []

    async getCategoriesDatabase(){
        const categoriesFound: Array<Icategory> = []

        try{
            const [rows]:any = await db
            .promise()
            .query(
                "SELECT * FROM category"
            );

            rows.map((element:Icategory)=>{
                categoriesFound.push(element)
            })

            this.categories = categoriesFound

        }
        catch(err){
            console.log(err)
        }
    }

    getCategories():Array<Icategory>{
        return this.categories
    }

}

export const categoryController = new CategoryController()