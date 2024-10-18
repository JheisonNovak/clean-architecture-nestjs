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

	async findAll(): Promise<TaskEntity[]> {
		return await this.taskRepository.find();
	}

	async findById(id: number): Promise<TaskEntity> {
		return await this.taskRepository.findOneBy({ id });
	}

	async update(task: TaskEntity): Promise<void> {
		await this.taskRepository.update(task.id, task);
	}

	async delete(id: number): Promise<void> {
		await this.taskRepository.delete(id);
	}
}
