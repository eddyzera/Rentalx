import { Request, Response } from "express";

import { ImportCategoryService } from "../../services/ImportCategoryService";

class ImportCategoryController {
    private importCategoryService: ImportCategoryService;
    constructor(importCategoryService: ImportCategoryService) {
        this.importCategoryService = importCategoryService;
    }

    handle(request: Request, response: Response): Response {
        const { file } = request;
        this.importCategoryService.execute(file);
        return response.status(201).send();
    }
}

export { ImportCategoryController };
