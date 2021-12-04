import { Controller, Get, Post, Body, Put, UseGuards } from '@nestjs/common';
import { PointsService } from './points.service';
import { Point } from './points.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/points')
export class PointsController {
  constructor(private pointsService: PointsService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.pointsService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  add(@Body() body: Point) {
    const point = {
      ...body,
      _id: `${Math.random()}`,
    };
    this.pointsService.add(point);

    return point;
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  update(@Body() body: Point) {
    this.pointsService.update(body);
  }
}
