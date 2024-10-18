import { Test, TestingModule } from "@nestjs/testing";
import { FindAllTaskUseCase } from "./find-all.use-case";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { ListTaskDto } from "../../models/dtos/list-task.dto";
import { TaskEntity } from "../../models/entities/task.entity";
import { TaskStatus } from "../../models/enums/task-status.enum";

describe("FindAllTask", () => {
	let findAllUseCase: FindAllTaskUseCase;
	let taskRepository: ITaskRepository;
	let mockRepository = {
		findAll: jest.fn().mockResolvedValue([new TaskEntity({ id: 1, title: "test", description: "test", status: TaskStatus.PENDING })]),
	};

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
		it("should be return a list of tasks", async () => {
			const tasks = await findAllUseCase.execute();

			expect(tasks).toBeInstanceOf(Array<ListTaskDto>);
			expect(taskRepository.findAll).toHaveBeenCalledTimes(1);
		});

		it("should be return an empty array", () => {
			jest.spyOn(taskRepository, "findAll").mockResolvedValueOnce([]);

			expect(findAllUseCase.execute()).resolves.toEqual([]);
		});
	});
});
