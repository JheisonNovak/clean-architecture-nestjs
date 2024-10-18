import { TaskEntity } from "../entities/task.entity";

export interface ITaskRepository {
	create(task: TaskEntity): Promise<TaskEntity>;
}
