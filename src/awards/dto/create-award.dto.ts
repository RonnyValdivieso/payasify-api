import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateAwardDto {
	@IsNotEmpty()
	name: string;

	description: string;

	@IsNotEmpty()
	@IsDate()
	eventDate: Date;
}
