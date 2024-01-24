import mongoose, { Model, Schema, model } from 'mongoose';
import { ICategory } from '../../interfaces';

const CategorySchema = new Schema({
  name: { type: String, required: true }
}, {
  timestamps: true,
  versionKey: false
});

const Category: Model<ICategory> = mongoose.models.Note || model<ICategory>('Categories', CategorySchema);

export default Category;