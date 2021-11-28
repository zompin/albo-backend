import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { EntitiesService } from './entities.service';

@Controller('api/entities')
export class EntitiesController {
  constructor(private entitiesService: EntitiesService) {}
  @Get(':pointId')
  index(@Param('pointId') pointId: string): Entity[] {
    return this.entitiesService.getAll(pointId);
  }

  @Post()
  add(@Body() entity: Entity) {
    return this.entitiesService.add(entity);
  }
}
