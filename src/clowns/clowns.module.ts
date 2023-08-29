import { Module } from '@nestjs/common';
import { ClownsService } from './clowns.service';
import { ClownsController } from './clowns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clown } from 'src/db';

@Module({
	imports: [TypeOrmModule.forFeature([Clown])],
	controllers: [ClownsController],
	providers: [ClownsService]
})
export class ClownsModule {}
