import { Injectable } from "@nestjs/common";
import { ITaskRepository } from "../models/interfaces/task-repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskEntity } from "../models/entities/task.entity";
import { Repository } from "typeorm";

@Injectable()
export class TaskTypeOrmRepository implements ITaskRepository {
	constructor(
		@InjectRepository(TaskEntity)
		private readonly taskRepository: Repository<TaskEntity>
	) {}

	async create(task: TaskEntity): Promise<TaskEntity> {
		return await this.taskRepository.save(task);
	}
}
