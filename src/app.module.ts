import { Module } from '@nestjs/common';
import { PointsModule } from './points/points.module';
import { EntitiesModule } from './entities/entities.module';

@Module({
  imports: [PointsModule, EntitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
