import { Test, TestingModule } from "@nestjs/testing";
import { DeleteTaskUseCase } from "./delete.use-case";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { ResponseDto } from "../../../../shared/dtos/response.dto";
import { BadRequestException } from "@nestjs/common";

describe("DeleteTask", () => {
	let deleteUseCase: DeleteTaskUseCase;
	let taskRepository: ITaskRepository;
	let mockRepository = {
		delete: jest.fn().mockResolvedValue({}),
	};

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [DeleteTaskUseCase, { provide: "ITaskRepository", useValue: mockRepository }],
		}).compile();

		deleteUseCase = module.get<DeleteTaskUseCase>(DeleteTaskUseCase);
		taskRepository = module.get<ITaskRepository>("ITaskRepository");
	});

	it("should be defined", () => {
		expect(deleteUseCase).toBeDefined();
		expect(mockRepository).toBeDefined();
	});

	describe("DeleteTaskUseCase", () => {
		it("should be delete a task", async () => {
			const result = await deleteUseCase.execute(1);

			expect(result).toBeInstanceOf(ResponseDto);
			expect(taskRepository.delete).toHaveBeenCalledTimes(1);
		});

		it("should be throw bad request exception", () => {
			jest.spyOn(taskRepository, "delete").mockRejectedValueOnce(new Error());

			expect(deleteUseCase.execute(1)).rejects.toThrow(BadRequestException);
		});
	});
});
