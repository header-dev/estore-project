import { Category } from './category.type';

export interface Product {
  id: number;
  product_name: string;
  product_description: string;
  product_img: string;
  price: number;
  ratings: number;
  category: Category;
}
