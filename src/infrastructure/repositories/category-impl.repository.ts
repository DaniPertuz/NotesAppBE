import { CategoryDatasource } from '../../domain/datasources/category.datasource';
import { CategoryEntity } from '../../domain/entities/category.entity';
import { CategoryRepository } from '../../domain/repository/category.repository';

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(
    private readonly categoryDatasource: CategoryDatasource
  ) { }

  async getCategories(): Promise<CategoryEntity[]> {
    return this.categoryDatasource.getCategories();
  }

  async createCategory(category: CategoryEntity): Promise<CategoryEntity | null> {
    return this.categoryDatasource.createCategory(category);
  }

  async removeCategory(id: number): Promise<CategoryEntity | null> {
    return this.categoryDatasource.removeCategory(id);
  }
}