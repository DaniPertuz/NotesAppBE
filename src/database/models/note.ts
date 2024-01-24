import mongoose, { Model, Schema, model } from 'mongoose';
import { INote, NoteStatus } from '../../interfaces';

const NoteSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Categories', required: true },
  status: { type: String, enum: NoteStatus }
}, {
  timestamps: true,
  versionKey: false
});

const Note: Model<INote> = mongoose.models.Note || model<INote>('Notes', NoteSchema);

export default Note;