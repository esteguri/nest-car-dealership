import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDTO, UpdateCarDTO } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(createCarDTO: CreateCarDTO) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDTO,
    };

    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDTO: UpdateCarDTO) {
    const car = this.findById(id);
    const updatedCar = { id, ...car, ...updateCarDTO };
    this.cars = this.cars.map((car) => (car.id === id ? updatedCar : car));
    return updatedCar;
  }

  delete(id: string) {
    this.findById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
