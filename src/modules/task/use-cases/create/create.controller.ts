import { Body, Controller, Post } from "@nestjs/common";
import { CreateTaskUseCase } from "./create.use-case";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTaskDto } from "../../models/dtos/create-task.dto";
import { ResponseDto } from "../../../../shared/dtos/response.dto";

@Controller("task")
export class CreateTaskController {
	constructor(private readonly createUseCase: CreateTaskUseCase) {}

	@Post("create")
	@ApiResponse({ status: 201, type: ResponseDto, description: "The record has been successfully created." })
	@ApiTags("Task")
	async execute(@Body() dto: CreateTaskDto) {
		return await this.createUseCase.execute(dto);
	}
}
