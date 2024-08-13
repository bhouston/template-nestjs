import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrgsModule } from './orgs/orgs.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [UsersModule, OrgsModule, FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
