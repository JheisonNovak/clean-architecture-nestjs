import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { CreateTaskDto } from "./create-task.dto";
import { IsEnum, IsOptional } from "class-validator";
import { TaskStatus } from "../enums/task-status.enum";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
	@ApiPropertyOptional()
	@IsOptional()
	@IsEnum(TaskStatus)
	status?: TaskStatus;
}
