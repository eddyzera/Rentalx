import { ImportCategoryService } from "../../services/ImportCategoryService";
import { ImportCategoryController } from "./ImportCategoryController";

const importCategoryService = new ImportCategoryService();
const importCategoryController = new ImportCategoryController(
    importCategoryService
);

export { importCategoryController };
