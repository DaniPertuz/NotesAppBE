import { Request, Response } from 'express';
import { CategoryRepositoryImpl } from '../../../infrastructure/repositories/category-impl.repository';
import { PostgresCategoryDatasource } from '../../../infrastructure/datasources/postgres-category.datasource';

export class CategoriesController {

  readonly categoryRepo = new CategoryRepositoryImpl(
    new PostgresCategoryDatasource()
  );

  public getCategories = async (req: Request, res: Response) => {
    const categories = await this.categoryRepo.getCategories();
    res.json(categories);
  };

  public createCategory = async (req: Request, res: Response) => {
    const { id, name } = req.body;

    const category = await this.categoryRepo.createCategory({ id, name });

    (category) ? res.json(category) : res.status(400).json({ error: 'Category already registered' });
  };

  public deleteCategory = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const category = await this.categoryRepo.removeCategory(id);

    res.json({ removed: category });
  };
}