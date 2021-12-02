import { Module } from '@nestjs/common';
import { PointsModule } from './points/points.module';
import { EntitiesModule } from './entities/entities.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PointsModule, EntitiesModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
