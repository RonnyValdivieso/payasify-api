import { Module } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { AwardsController } from './awards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Award } from 'src/db';

@Module({
	imports: [TypeOrmModule.forFeature([Award])],
	controllers: [AwardsController],
	providers: [AwardsService]
})
export class AwardsModule {}
