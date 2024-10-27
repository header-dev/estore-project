import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './../../modules/category/category';
import { Product } from './../../modules/product/product';
import { ProductModule } from './../../modules/product/product.module';
import { CategoryModule } from './../../modules/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Product]),
    CategoryModule,
    ProductModule,
  ],
  providers: [SeederService],
})
export class SeederModule {}
