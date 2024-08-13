import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';

import { JwtAuthGuard } from '../auth/auth.guard';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
