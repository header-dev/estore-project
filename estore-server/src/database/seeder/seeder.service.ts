import { Injectable } from '@nestjs/common';
import { CategoryService } from './../../modules/category/category.service';
import { ProductService } from './../../modules/product/product.service';
import { Category } from './../../modules/category/category';

@Injectable()
export class SeederService {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
  ) {}

  async seedCategory() {
    await this.categoryService.createOrUpdateMany([
      { name: 'Men' },
      { name: 'Woman' },
      { name: 'Kids' },
      { name: 'Casual Wear' },
      { name: 'Party Wear' },
      { name: 'Foot Wear' },
      { name: 'Accessories' },
    ]);

    const category = new Category();
    category.name = 'Men';

    console.log('Database seeded!');
  }

  async seedCategoryProduct() {
    const menCategory = await this.categoryService.findOne({
      where: {
        name: 'Men',
      },
    });
    await this.productService.createOrUpdateMany([
      {
        product_name: 'Jacket',
        product_description: 'A stylish jacket for men',
        price: 500,
        ratings: Math.floor(Math.random() * 5) + 1,
        category: menCategory,
        product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
      },
      {
        product_name: 'Shirt',
        product_description: 'A comfortable shirt for men',
        price: Math.floor(Math.random() * 1000),
        ratings: Math.floor(Math.random() * 5) + 1,
        category: menCategory,
        product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
      },
      {
        product_name: 'Jeans',
        product_description: 'Stylish jeans for men',
        price: Math.floor(Math.random() * 1000),
        ratings: Math.floor(Math.random() * 5) + 1,
        category: menCategory,
        product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
      },
      {
        product_name: 'T-Shirt',
        product_description: 'A casual t-shirt for men',
        price: Math.floor(Math.random() * 1000),
        ratings: Math.floor(Math.random() * 5) + 1,
        category: menCategory,
        product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
      },
      {
        product_name: 'T-Shirt-2',
        product_description: 'A casual t-shirt for men',
        price: Math.floor(Math.random() * 1000),
        ratings: Math.floor(Math.random() * 5) + 1,
        category: menCategory,
        product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
      },
    ]);

    const womenCategory = this.categoryService.findOne({
      where: {
        name: 'Woman',
      },
    });
    await this.productService.createOrUpdateMany([
      {
        product_name: 'Saree',
        product_description: 'Traditional saree for women',
        price: 1000,
        ratings: Math.floor(Math.random() * 5) + 1,
        category: womenCategory,
        product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
      },
      {
        product_name: 'Kurti',
        product_description: 'Stylish kurti for women',
        price: Math.floor(Math.random() * 1000),
        ratings: Math.floor(Math.random() * 5) + 1,
        category: womenCategory,
        product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
      },
      {
        product_name: 'Lehenga',
        product_description: 'Elegant lehenga for women',
        price: Math.floor(Math.random() * 1000),
        ratings: Math.floor(Math.random() * 5) + 1,
        category: womenCategory,
        product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
      },
      {
        product_name: 'Tops',
        product_description: 'Stylish tops for women',
        price: Math.floor(Math.random() * 1000),
        ratings: Math.floor(Math.random() * 5) + 1,
        category: womenCategory,
        product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
      },
    ]);

    await this.categoryService.save(womenCategory);

    /** 
    const kidsCategory = await this.categoryService.findOne(
      (c) => c.name === 'Kids',
    );
    if (kidsCategory && kidsCategory.id) {
      await this.productService.createOrUpdateMany([
        {
          product_name: 'Shirt',
          product_description: 'Cute shirt for kids',
          price: 500,
          ratings: Math.floor(Math.random() * 5) + 1,
          category: kidsCategory,
          product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
        },
        {
          product_name: 'T-Shirt',
          product_description: 'Comfortable t-shirt for kids',
          price: Math.floor(Math.random() * 1000),
          ratings: Math.floor(Math.random() * 5) + 1,
          category: kidsCategory,
          product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
        },
        {
          product_name: 'Jeans',
          product_description: 'Stylish jeans for kids',
          price: Math.floor(Math.random() * 1000),
          ratings: Math.floor(Math.random() * 5) + 1,
          category: kidsCategory,
          product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
        },
        {
          product_name: 'Shorts',
          product_description: 'Comfortable shorts for kids',
          price: Math.floor(Math.random() * 1000),
          ratings: Math.floor(Math.random() * 5) + 1,
          category: kidsCategory,
          product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
        },
      ]);
    }
    const casualWearCategory = await this.categoryService.findOne(
      (c) => c.name === 'Casual Wear',
    );
    if (casualWearCategory && casualWearCategory.id) {
      await this.productService.createOrUpdateMany([
        {
          product_name: 'Shirt',
          product_description: 'Casual shirt for everyday wear',
          price: 500,
          ratings: Math.floor(Math.random() * 5) + 1,
          category: casualWearCategory,
          product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
        },
        {
          product_name: 'Trousers',
          product_description: 'Comfortable trousers for casual wear',
          price: Math.floor(Math.random() * 1000),
          ratings: Math.floor(Math.random() * 5) + 1,
          category: casualWearCategory,
          product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
        },
        {
          product_name: 'Dress',
          product_description: 'Stylish dress for casual occasions',
          price: Math.floor(Math.random() * 1000),
          ratings: Math.floor(Math.random() * 5) + 1,
          category: casualWearCategory,
          product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
        },
        {
          product_name: 'Skirt',
          product_description: 'Trendy skirt for casual wear',
          price: Math.floor(Math.random() * 1000),
          ratings: Math.floor(Math.random() * 5) + 1,
          category: casualWearCategory,
          product_img: `shop-${Math.floor(Math.random() * 9) + 1}.jpg`,
        },
      ]);
    }
      **/

    console.log('Database seeded!');
  }
}
