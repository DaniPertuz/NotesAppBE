import { PrismaClient } from '@prisma/client';
import { CategoryDatasource } from '../../domain/datasources/category.datasource';
import { CategoryEntity } from '../../domain/entities/category.entity';

const prisma = new PrismaClient();

export class PostgresCategoryDatasource implements CategoryDatasource {
  async getCategories(): Promise<CategoryEntity[]> {
    const categories = await prisma.category.findMany();
    return categories.map(CategoryEntity.fromObject);
  }

  async createCategory(category: CategoryEntity): Promise<CategoryEntity | null> {
    const { id, name } = category;

    const categoryDB = await prisma.category.findFirst({
      where: {
        name
      }
    });

    if (categoryDB) return null;

    const newCategory = await prisma.category.create({
      data: { id, name }
    });

    return CategoryEntity.fromObject(newCategory);
  }

  async removeCategory(id: number): Promise<CategoryEntity | null> {
    return CategoryEntity.fromObject(await prisma.category.delete({
      where: { id }
    }));
  }
}