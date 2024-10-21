import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { ResponseDto } from "../../../../shared/dtos/response.dto";

@Injectable()
export class DeleteTaskUseCase {
	@Inject("ITaskRepository")
	private readonly taskRepository: ITaskRepository;

	async execute(id: number) {
		try {
			await this.taskRepository.delete(id);
			return new ResponseDto("Task deleted successfully");
		} catch {
			throw new BadRequestException("Failed to delete task");
		}
	}
}
