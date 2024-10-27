import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/category/category.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';
import { SearchKeyword } from './types/searchKeyword.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productsStoreItem: ProductsStoreItem
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
  }

  onSelectSubCategory(categoryId: number): void {
    this.productsStoreItem.loadProducts(`subCategoryId=${categoryId}`);
  }

  onSelectCategory(categoryId: number): void {
    this.productsStoreItem.loadProducts(`categoryId=${categoryId}`);
  }

  onSearchKeyword(searchKeyword: SearchKeyword): void {
    this.productsStoreItem.loadProducts(
      `categoryId=${searchKeyword.categoryId}&keyword=${searchKeyword.keyword}`
    );
  }
}
