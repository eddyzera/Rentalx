import { Specification } from "../../model/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
    private specification: Specification[];
    constructor() {
        this.specification = [];
    }
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
        });
        this.specification.push(specification);
    }

    findByName(name: string): Specification {
        return this.specification.find((it) => it.name === name);
    }
}

export { SpecificationsRepository };
