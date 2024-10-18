import { Module } from "@nestjs/common";
import { CreateTaskController } from "./use-cases/create/create.controller";
import { CreateTaskUseCase } from "./use-cases/create/create.use-case";
import { TaskTypeOrmRepository } from "./repositories/task.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntity } from "./models/entities/task.entity";

@Module({
	imports: [TypeOrmModule.forFeature([TaskEntity])],
	controllers: [CreateTaskController],
	providers: [
		TaskTypeOrmRepository,
		{
			provide: "ITaskRepository",
			useExisting: TaskTypeOrmRepository,
		},
		CreateTaskUseCase,
	],
	exports: ["ITaskRepository", CreateTaskUseCase],
})
export class TaskModule {}
