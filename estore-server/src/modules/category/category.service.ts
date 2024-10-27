import { AbstractService } from './../../shared/abstract.service';
import { Injectable } from '@nestjs/common';
import { Category } from './category';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService extends AbstractService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {
    super(categoryRepository);
  }
}
