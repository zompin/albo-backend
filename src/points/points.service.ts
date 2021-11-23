import { Injectable } from '@nestjs/common';
import { Point } from './points.interface';

@Injectable()
export class PointsService {
  private readonly points: Point[] = [
    {
      _id: 'id1',
      name: 'name',
      legalName: 'legalName',
      address: 'address',
      inn: 'inn',
      contacts: 'contacts',
    },
    {
      _id: 'id2',
      name: 'name2',
      legalName: 'legalName2',
      address: 'address2',
      inn: 'inn2',
      contacts: 'contacts2',
    },
  ];

  getAll() {
    return this.points;
  }

  add(point: Point) {
    this.points.push(point);
  }

  update(point: Point) {
    const index = this.points.findIndex((p) => p._id === point);

    if (index !== -1) {
      this.points[index] = point;
    }
  }
}
