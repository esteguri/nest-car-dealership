import { Car } from './../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'BMW',
    model: 'M3',
  },
  {
    id: uuid(),
    brand: 'Kia',
    model: 'Sportage',
  },
  {
    id: uuid(),
    brand: 'Mazda',
    model: 'CX-5',
  },
];
