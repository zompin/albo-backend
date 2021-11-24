import { Controller, Get, Post, Body, Put } from '@nestjs/common';
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
    const point = {
      ...body,
      _id: `${Math.random()}`,
    };
    this.pointsService.add(point);

    return point;
  }

  @Put()
  update(@Body() body: Point) {
    this.pointsService.update(body);
  }
}
