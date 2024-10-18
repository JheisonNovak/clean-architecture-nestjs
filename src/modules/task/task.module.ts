import { Module } from "@nestjs/common";
import { UpdateTaskController } from "./use-cases/update/update.controller";
import { UpdateTaskUseCase } from "./use-cases/update/update.use-case";
import { FindOneByIdTaskController } from "./use-cases/find-one-by-id/find-one-by-id.controller";
import { FindOneByIdTaskUseCase } from "./use-cases/find-one-by-id/find-one-by-id.use-case";
import { FindAllTaskController } from "./use-cases/find-all/find-all.controller";
import { FindAllTaskUseCase } from "./use-cases/find-all/find-all.use-case";
import { CreateTaskController } from "./use-cases/create/create.controller";
import { CreateTaskUseCase } from "./use-cases/create/create.use-case";
import { TaskTypeOrmRepository } from "./repositories/task.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntity } from "./models/entities/task.entity";

@Module({
	imports: [TypeOrmModule.forFeature([TaskEntity])],
	controllers: [CreateTaskController, FindAllTaskController, FindOneByIdTaskController, UpdateTaskController],
	providers: [
		TaskTypeOrmRepository,
		{
			provide: "ITaskRepository",
			useExisting: TaskTypeOrmRepository,
		},
		CreateTaskUseCase,
	    FindAllTaskUseCase,
	    FindOneByIdTaskUseCase,
	    UpdateTaskUseCase,
	],
	exports: ["ITaskRepository", CreateTaskUseCase, FindAllTaskUseCase, FindOneByIdTaskUseCase, UpdateTaskUseCase],
})
export class TaskModule {}
