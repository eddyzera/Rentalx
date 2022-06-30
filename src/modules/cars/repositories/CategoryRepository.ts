import { Category } from "../model/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

class CategoryRepository implements ICategoriesRepository {
    private categories: Array<Category> = [];

    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: CategoryRepository;
    private constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
        this.categories.push(category);
    }

    public static getInstance(): CategoryRepository {
        if (!CategoryRepository.INSTANCE) {
            CategoryRepository.INSTANCE = new CategoryRepository();
        }
        return CategoryRepository.INSTANCE;
    }

    list(): Array<Category> {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(
            (category) => category.name === name
        );
        return category;
    }
}
export { CategoryRepository };
