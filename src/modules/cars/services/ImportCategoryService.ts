import { parse as csvParse } from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}
class ImportCategoryService {
    private categoryRepository: ICategoriesRepository;
    constructor(categoryRepository: ICategoriesRepository) {
        this.categoryRepository = categoryRepository;
    }
    loadCategories(file: Express.Multer.File): Promise<Array<IImportCategory>> {
        return new Promise((resolver, reject) => {
            const categories: Array<IImportCategory> = [];
            const stream = fs.createReadStream(file.path);
            const parseFile = csvParse();
            stream.pipe(parseFile);
            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    resolver(categories);
                })
                .on("error", (error) => {
                    reject(error);
                });
        });
    }
    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.forEach((category) => {
            const { name, description } = category;
            const existCategories = this.categoryRepository.findByName(name);

            if (!existCategories) {
                this.categoryRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}

export { ImportCategoryService };
