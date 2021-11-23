import { Controller, Get, Post, Body } from '@nestjs/common';
import { PointsService } from './points.service';
import { Point } from './points.interface';

@Controller('api/points')
export class PointsController {
  constructor(private pointsService: PointsService) {}
  @Get()
  getAll() {
    return this.pointsService.getAll();
  }

  @Post()
  add(@Body() body: Point) {
    this.pointsService.add(body);
  }

  @Post()
  update(@Body() body: Point) {
    this.pointsService.update(body);
  }
}
