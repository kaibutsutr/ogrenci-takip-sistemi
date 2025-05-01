import { Test, TestingModule } from '@nestjs/testing';
import { GauthService } from './gauth.service';

describe('GauthService', () => {
  let service: GauthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GauthService],
    }).compile();

    service = module.get<GauthService>(GauthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
