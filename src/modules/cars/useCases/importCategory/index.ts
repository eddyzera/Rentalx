import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportCategoryService } from "../../services/ImportCategoryService";
import { ImportCategoryController } from "./ImportCategoryController";

const categoriesRepository = CategoryRepository.getInstance();
const importCategoryService = new ImportCategoryService(categoriesRepository);
const importCategoryController = new ImportCategoryController(
    importCategoryService
);

export { importCategoryController };
