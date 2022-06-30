import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

class ListCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    execute() {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoryService };
