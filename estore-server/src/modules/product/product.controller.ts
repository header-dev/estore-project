import { Like } from 'typeorm';
import { ProductService } from './product.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
// import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(
    @Query('categoryId') categoryId?: number,
    @Query('subCategoryId') subCategoryId?: number,
    @Query('keyword') keyword?: string,
  ) {
    let query: any = {};

    if (subCategoryId) {
      query = { ...query, category: { id: subCategoryId } };
    }

    if (categoryId) {
      query.category = {
        ...query.category,
        parent_category_id: categoryId,
      };
    }

    if (keyword) {
      query = { ...query, keywords: Like(`%${keyword}%`) };
    }

    console.log(query);

    return this.productService.find({
      where: query,
      relations: ['category'],
    });
  }

  @Get(':id')
  async getProduct(@Param('id') id: number) {
    return this.productService.findOne({
      where: { id },
      relations: ['category'],
    });
  }

  @Post()
  async createProduct(@Body() createProductDto: any) {
    return this.productService.save(createProductDto);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: number, @Body() updateProductDto: any) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
