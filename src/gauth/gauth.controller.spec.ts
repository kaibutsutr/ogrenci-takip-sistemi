import { Test, TestingModule } from '@nestjs/testing';
import { GauthController } from './gauth.controller';

describe('GauthController', () => {
  let controller: GauthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GauthController],
    }).compile();

    controller = module.get<GauthController>(GauthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
