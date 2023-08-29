import { Injectable } from '@nestjs/common';
import { CreateClownDto } from './dto/create-clown.dto';
import { UpdateClownDto } from './dto/update-clown.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Clown } from 'src/db';
import { Repository } from 'typeorm';

@Injectable()
export class ClownsService {
	constructor(
		@InjectRepository(Clown) private readonly clownRepository: Repository<Clown>
	) {}

	create(createClownDto: CreateClownDto) {
		const newAward = this.clownRepository.create(createClownDto);
		return this.clownRepository.save(newAward);
	}

	findAll() {
		return this.clownRepository.find();
	}

	findOne(id: string) {
		return this.clownRepository.findOneBy({ id });
	}

	update(id: string, updateClownDto: UpdateClownDto) {
		return this.clownRepository.update(id, updateClownDto);
	}

	async remove(id: string) {
		const award = await this.findOne(id);
		award.status = 'DELETED';
		award.deletedAt = new Date();
		return this.update(id, award);
	}
}
