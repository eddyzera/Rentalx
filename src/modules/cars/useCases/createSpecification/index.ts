import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../../services/CreateSpecificationService";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = new SpecificationsRepository();
const createSpecificationService = new CreateSpecificationService(
    specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationService
);

export { createSpecificationController };
