import { CategoryEntity } from '../entities/category.entity';

export abstract class CategoryDatasource {
  abstract getCategories(): Promise<CategoryEntity[]>;
  abstract createCategory(category: CategoryEntity): Promise<CategoryEntity | null>;
  abstract removeCategory(id: number): Promise<CategoryEntity | null>;
}