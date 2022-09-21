import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: Date.now(),
    };

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException('Brand not found');
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);

    const newBrand: Brand = {
      id,
      ...brand,
      ...updateBrandDto,
      updatedAt: Date.now(),
    };

    this.brands = this.brands.map((brand) =>
      brand.id === id ? newBrand : brand,
    );
    return newBrand;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
