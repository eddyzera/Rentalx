import { Request, Response } from "express";

import { ListCategoryService } from "../../services/ListCategoryService";

class ListCategoryController {
    private listCategoryService: ListCategoryService;
    constructor(listCategoryService: ListCategoryService) {
        this.listCategoryService = listCategoryService;
    }
    handle(request: Request, response: Response): Response {
        const categories = this.listCategoryService.execute();
        return response.status(200).json(categories);
    }
}

export { ListCategoryController };
