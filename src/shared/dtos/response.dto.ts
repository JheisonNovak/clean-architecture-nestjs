import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ResponseDto<T> {
	@ApiProperty()
	message: string;
	@ApiPropertyOptional()
	data?: T;
	@ApiProperty({ default: true })
	success: boolean;

	constructor(message: string, data?: T, success = true) {
		this.message = message;
		this.data = data;
		this.success = success;
	}
}
