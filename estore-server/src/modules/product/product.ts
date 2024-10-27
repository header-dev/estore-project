import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/category';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_name: string;

  @Column({ nullable: true })
  product_description: string;

  @Column()
  price: number;

  @Column()
  ratings: number;

  @Column()
  product_img: string;

  @Column({ nullable: true })
  keywords: string;

  @ManyToOne(() => Category, (category) => category.id, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
