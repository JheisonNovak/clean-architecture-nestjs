import { Controller, Delete, Param, ParseIntPipe } from "@nestjs/common";
import { DeleteTaskUseCase } from "./delete.use-case";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ResponseDto } from "../../../../shared/dtos/response.dto";

@Controller("task")
export class DeleteTaskController {
	constructor(private readonly deleteUseCase: DeleteTaskUseCase) {}

	@Delete("delete/:id")
	@ApiResponse({ type: ResponseDto, description: "delete a task" })
	@ApiTags("Task")
	async execute(@Param("id", ParseIntPipe) id: number) {
		return await this.deleteUseCase.execute(id);
	}
}
