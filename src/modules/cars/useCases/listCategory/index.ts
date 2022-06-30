import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ListCategoryService } from "../../services/ListCategoryService";
import { ListCategoryController } from "./ListCategoryController";

const categoriesRepository = CategoryRepository.getInstance();
const listCategoryService = new ListCategoryService(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryService);

export { listCategoryController };
