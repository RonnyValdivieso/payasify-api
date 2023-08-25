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
import { AwardsService } from './awards.service';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Response } from 'express';

@Controller('awards')
export class AwardsController {
	constructor(private readonly awardsService: AwardsService) {}

	@Post()
	create(@Body() createAwardDto: CreateAwardDto) {
		return this.awardsService.create(createAwardDto);
	}

	@Get()
	findAll() {
		return this.awardsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.awardsService.findOne(id);
	}

	@Patch(':id')
	async update(
		@Param('id') id: string,
		@Body() updateAwardDto: UpdateAwardDto,
		@Res() res: Response
	) {
		const result = await this.awardsService.update(id, updateAwardDto);
		if (result.affected == 0) {
			return res
				.status(HttpStatus.BAD_REQUEST)
				.send('El registro no pudo ser actualizado. Intente nuevamente.');
		}
		return res.status(HttpStatus.NO_CONTENT).send();
	}

	@Delete(':id')
	async remove(@Param('id') id: string, @Res() res: Response) {
		const result = await this.awardsService.remove(id);
		if (result.affected == 0) {
			return res
				.status(HttpStatus.BAD_REQUEST)
				.send('El registro no pudo ser eliminado. Intente nuevamente.');
		}
		return res.status(HttpStatus.NO_CONTENT).send();
	}
}
