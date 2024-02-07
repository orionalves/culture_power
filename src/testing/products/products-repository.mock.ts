import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from '../../products/entities/product.entity';

export class productsRepositoryMock {
  userRepositoryMock = {
    provide: getRepositoryToken(Product),
    useValue: {
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      softDelete: jest.fn(),
      restore: jest.fn(),
    },
  };
}
