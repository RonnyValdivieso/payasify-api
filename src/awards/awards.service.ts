import { Injectable } from '@nestjs/common';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Award } from 'src/db';
import { Repository } from 'typeorm';

@Injectable()
export class AwardsService {
	constructor(
		@InjectRepository(Award) private readonly awardRepository: Repository<Award>
	) {}

	create(createAwardDto: CreateAwardDto) {
		const newAward = this.awardRepository.create(createAwardDto);
		return this.awardRepository.save(newAward);
	}

	findAll() {
		return this.awardRepository.find();
	}

	findOne(id: string) {
		return this.awardRepository.findOneBy({ id });
	}

	update(id: string, updateAwardDto: UpdateAwardDto) {
		return this.awardRepository.update(id, updateAwardDto);
	}

	async remove(id: string) {
		const award = await this.findOne(id);
		award.status = 'DELETED';
		award.deletedAt = new Date();
		return this.update(id, award);
	}
}
