import { Category } from '../types/category.type';

export const categories: Category[] = [
  { id: 1, name: 'Electronics' },
  { id: 3, name: 'Shoes' },
  { id: 9, name: 'Other' },
  { id: 10, name: 'Books', parent_category_id: 9 },
  { id: 11, name: 'Running Shoes', parent_category_id: 3 },
  { id: 12, name: 'Basketball Shoes', parent_category_id: 3 },
  { id: 13, name: 'DVD Players', parent_category_id: 1 },
];
