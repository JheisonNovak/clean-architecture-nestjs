import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { ListTaskDto } from "../../models/dtos/list-task.dto";

@Injectable()
export class FindOneByIdTaskUseCase {
	constructor(
		@Inject("ITaskRepository")
		private readonly taskRepository: ITaskRepository
	) {}

	async execute(id: number) {
		const task = await this.taskRepository.findById(id);
		if (!task) throw new NotFoundException("Task not found");
		return new ListTaskDto(task.id, task.title, task.description, task.status);
	}
}
