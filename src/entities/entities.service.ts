import { Injectable } from '@nestjs/common';

@Injectable()
export class EntitiesService {
  private readonly items: Entity[] = [
    {
      pointId: 'id1',
      type: 'router',
      fields: [
        { name: 'password', value: 'superpassword' },
        { name: 'login', value: 'superlogin' },
        { name: 'ssssss', value: 'ssssss' },
      ],
    },
  ];

  getAll(pointId: string): Entity[] {
    return this.items.filter((item) => item.pointId === pointId);
  }

  add(entity: Entity): Entity {
    const tmp = {
      ...entity,
      _id: `${Math.random()}`,
    };
    this.items.push(tmp);

    return tmp;
  }

  update(entity: Entity): Entity {
    this.items.forEach((item, index) => {
      if (item._id === entity._id) {
        this.items[index] = entity;
      }
    });

    return entity;
  }
}
