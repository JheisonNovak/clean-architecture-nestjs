import { Controller, Patch, Param, ParseIntPipe, Body } from "@nestjs/common";
import { UpdateTaskUseCase } from "./update.use-case";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ResponseDto } from "../../../../shared/dtos/response.dto";
import { UpdateTaskDto } from "../../models/dtos/update-task.dto";

@Controller("task")
export class UpdateTaskController {
	constructor(private readonly updateUseCase: UpdateTaskUseCase) {}

	@Patch("update/:id")
	@ApiResponse({ type: ResponseDto, description: "Update a task" })
	@ApiTags("Task")
	async execute(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateTaskDto) {
		return await this.updateUseCase.execute(id, dto);
	}
}
