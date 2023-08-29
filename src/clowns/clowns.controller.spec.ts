import { Test, TestingModule } from '@nestjs/testing';
import { ClownsController } from './clowns.controller';
import { ClownsService } from './clowns.service';

describe('ClownsController', () => {
	let controller: ClownsController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ClownsController],
			providers: [ClownsService]
		}).compile();

		controller = module.get<ClownsController>(ClownsController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
