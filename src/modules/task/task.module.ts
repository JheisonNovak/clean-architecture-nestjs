import { Module } from "@nestjs/common";
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
	controllers: [CreateTaskController, FindAllTaskController, FindOneByIdTaskController],
	providers: [
		TaskTypeOrmRepository,
		{
			provide: "ITaskRepository",
			useExisting: TaskTypeOrmRepository,
		},
		CreateTaskUseCase,
	    FindAllTaskUseCase,
	    FindOneByIdTaskUseCase,
	],
	exports: ["ITaskRepository", CreateTaskUseCase, FindAllTaskUseCase, FindOneByIdTaskUseCase],
})
export class TaskModule {}
