import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrgsModule } from './orgs/orgs.module';

@Module({
  imports: [UsersModule, OrgsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
