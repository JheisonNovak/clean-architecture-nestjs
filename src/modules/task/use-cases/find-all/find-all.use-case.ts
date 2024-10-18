import { Inject, Injectable } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { ListTaskDto } from "../../models/dtos/list-task.dto";

@Injectable()
export class FindAllTaskUseCase {
	constructor(
		@Inject("ITaskRepository")
		private readonly taskRepository: ITaskRepository
	) {}

	async execute() {
		const tasks = await this.taskRepository.findAll();
		return tasks.map(task => new ListTaskDto(task.id, task.title, task.description, task.status));
	}
}
