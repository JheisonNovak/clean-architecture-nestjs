import { Test, TestingModule } from "@nestjs/testing";
import { FindAllTaskUseCase } from "./find-all.use-case";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";

describe("FindAllTask", () => {
	let findAllUseCase: FindAllTaskUseCase;
	let taskRepository: ITaskRepository;
	let mockRepository = {};

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [FindAllTaskUseCase, { provide: "ITaskRepository", useValue: mockRepository }],
		}).compile();

		findAllUseCase = module.get<FindAllTaskUseCase>(FindAllTaskUseCase);
		taskRepository = module.get<ITaskRepository>("ITaskRepository");
	});

	it("should be defined", () => {
		expect(findAllUseCase).toBeDefined();
		expect(mockRepository).toBeDefined();
	});

	describe("FindAllTaskUseCase", () => {
		
	});
});
