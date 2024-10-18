import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { FindOneByIdTaskUseCase } from "./find-one-by-id.use-case";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ListTaskDto } from "../../models/dtos/list-task.dto";

@Controller("task")
export class FindOneByIdTaskController {
	constructor(private readonly findOneByIdUseCase: FindOneByIdTaskUseCase) {}

	@Get("find-one-by-id/:id")
	@ApiResponse({ status: 200, type: ListTaskDto, description: "List a task" })
	@ApiTags("Task")
	async execute(@Param("id", ParseIntPipe) id: number) {
		return await this.findOneByIdUseCase.execute(id);
	}
}
