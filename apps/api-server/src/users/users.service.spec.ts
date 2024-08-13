import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: 'yourSecretKey', // You should use an environment variable for this
          signOptions: { expiresIn: '1h' }
        })
      ],
      providers: [UsersService, JwtStrategy]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
