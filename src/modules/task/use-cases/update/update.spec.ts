import { Test, TestingModule } from "@nestjs/testing";
import { UpdateTaskUseCase } from "./update.use-case";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { ResponseDto } from "../../../../shared/dtos/response.dto";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { TaskEntity } from "../../models/entities/task.entity";
import { TaskStatus } from "../../models/enums/task-status.enum";

describe("UpdateTask", () => {
	let updateUseCase: UpdateTaskUseCase;
	let taskRepository: ITaskRepository;
	let mockRepository = {
		findById: jest.fn().mockResolvedValue(new TaskEntity({ id: 1, title: "test", description: "test", status: TaskStatus.PENDING })),
		update: jest.fn().mockResolvedValue({}),
	};

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UpdateTaskUseCase, { provide: "ITaskRepository", useValue: mockRepository }],
		}).compile();

		updateUseCase = module.get<UpdateTaskUseCase>(UpdateTaskUseCase);
		taskRepository = module.get<ITaskRepository>("ITaskRepository");
	});

	it("should be defined", () => {
		expect(updateUseCase).toBeDefined();
		expect(mockRepository).toBeDefined();
	});

	describe("UpdateTaskUseCase", () => {
		it("should be update a task", async () => {
			const result = await updateUseCase.execute(1, { title: "test", description: "test" });

			expect(result).toBeInstanceOf(ResponseDto);
			expect(taskRepository.update).toHaveBeenCalledTimes(1);
		});

		it("should be throw not found exception", () => {
			jest.spyOn(taskRepository, "findById").mockResolvedValueOnce(null);

			expect(updateUseCase.execute(1, { title: "test", description: "test" })).rejects.toThrow(NotFoundException);
		});

		it("should be throw bad request exception", () => {
			jest.spyOn(taskRepository, "update").mockRejectedValueOnce(new Error());

			expect(updateUseCase.execute(1, { title: "test", description: "test" })).rejects.toThrow(BadRequestException);
		});
	});
});
