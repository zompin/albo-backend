import { Body, Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/entities')
export class EntitiesController {
  constructor(private entitiesService: EntitiesService) {}
  @UseGuards(JwtAuthGuard)
  @Get(':pointId')
  index(@Param('pointId') pointId: string): Entity[] {
    return this.entitiesService.getAll(pointId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  add(@Body() entity: Entity) {
    return this.entitiesService.add(entity);
  }
}
