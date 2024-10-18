import { ApiProperty } from "@nestjs/swagger";

export class ResponseDto<T> {
	@ApiProperty()
	message: string;
	@ApiProperty()
	data: T;
	@ApiProperty()
	success: boolean;

	constructor(message: string, data: T, success = true) {
		this.message = message;
		this.data = data;
		this.success = success;
	}
}
