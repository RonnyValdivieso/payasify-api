import { Test, TestingModule } from '@nestjs/testing';
import { ClownsService } from './clowns.service';

describe('ClownsService', () => {
	let service: ClownsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ClownsService]
		}).compile();

		service = module.get<ClownsService>(ClownsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
