import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Res,
	HttpStatus
} from '@nestjs/common';
import { ClownsService } from './clowns.service';
import { CreateClownDto } from './dto/create-clown.dto';
import { UpdateClownDto } from './dto/update-clown.dto';
import { Response } from 'express';

@Controller('clowns')
export class ClownsController {
	constructor(private readonly clownsService: ClownsService) {}

	@Post()
	create(@Body() createClownDto: CreateClownDto) {
		return this.clownsService.create(createClownDto);
	}

	@Get()
	findAll() {
		return this.clownsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.clownsService.findOne(id);
	}

	@Patch(':id')
	async update(
		@Param('id') id: string,
		@Body() updateClownDto: UpdateClownDto,
		@Res() res: Response
	) {
		const result = await this.clownsService.update(id, updateClownDto);
		if (result.affected == 0) {
			return res
				.status(HttpStatus.BAD_REQUEST)
				.send('El registro no pudo ser actualizado. Intente nuevamente.');
		}
		return res.status(HttpStatus.NO_CONTENT).send();
	}

	@Delete(':id')
	async remove(@Param('id') id: string, @Res() res: Response) {
		const result = await this.clownsService.remove(id);
		if (result.affected == 0) {
			return res
				.status(HttpStatus.BAD_REQUEST)
				.send('El registro no pudo ser eliminado. Intente nuevamente.');
		}
		return res.status(HttpStatus.NO_CONTENT).send();
	}
}
