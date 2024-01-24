import { NoteStatus } from '../../../interfaces';

export class CreateNoteDto {

  private constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly body: string,
    public readonly category: number,
    public readonly status: NoteStatus
  ) { }

  static create(props: { [key: string]: any; }): [string?, CreateNoteDto?] {
    const { id, title, body, category, status } = props;
 
    if (!category) return ['Category is not valid', undefined];
 
    return [undefined, new CreateNoteDto(id, title, body, category, status)];
  }
}