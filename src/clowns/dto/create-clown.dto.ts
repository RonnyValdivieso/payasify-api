import { IsNotEmpty } from 'class-validator';

export class CreateClownDto {
	@IsNotEmpty()
	name: string;
}
