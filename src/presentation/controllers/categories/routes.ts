import { Router } from 'express';
import { CategoriesController } from './controller';

export class CategoriesRoutes {
  static get routes(): Router {
    const router = Router();

    const { createCategory, deleteCategory, getCategories } = new CategoriesController();

    router.get('/', getCategories);
    router.post('/', createCategory);
    router.delete('/:id', deleteCategory);

    return router;
  }
}