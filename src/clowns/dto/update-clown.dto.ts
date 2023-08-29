import { PartialType } from '@nestjs/swagger';
import { CreateClownDto } from './create-clown.dto';

export class UpdateClownDto extends PartialType(CreateClownDto) {}
