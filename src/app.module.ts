import { Module } from '@nestjs/common';
import { PointsModule } from './points/points.module';

@Module({
  imports: [PointsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
