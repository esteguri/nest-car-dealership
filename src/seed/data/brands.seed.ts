import { Brand } from './../../brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Kia',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Mazda',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'BMW',
    createdAt: Date.now(),
  },
];
