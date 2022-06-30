import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { CreateCategoryService } from "../../services/CreateCategoryService";
import { CrateCategoryController } from "./CreateCategoryController";

const categoriesRepository = CategoryRepository.getInstance();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CrateCategoryController(
    createCategoryService
);

export { createCategoryController };
