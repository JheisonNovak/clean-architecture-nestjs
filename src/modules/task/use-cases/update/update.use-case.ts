import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { UpdateTaskDto } from "../../models/dtos/update-task.dto";
import { ResponseDto } from "../../../../shared/dtos/response.dto";
import { TaskEntity } from "../../models/entities/task.entity";

@Injectable()
export class UpdateTaskUseCase {
	@Inject("ITaskRepository")
	private readonly taskRepository: ITaskRepository;

	async execute(id: number, dto: UpdateTaskDto) {
		const task = await this.taskRepository.findById(id);
		if (!task) throw new NotFoundException("Task not found");
		task.isUpdatable();
		Object.assign(task, dto);
		try {
			await this.taskRepository.update(task);
			return new ResponseDto<TaskEntity>("Task updated successfully");
		} catch {
			throw new BadRequestException("Failed to update task");
		}
	}
}
