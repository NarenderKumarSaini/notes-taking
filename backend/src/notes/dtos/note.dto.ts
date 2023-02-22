import { Note } from '../entities/note.entity';

export class NoteDto {
  id: number;
  title: string;
  content: string;
}

export function toNote(dto: NoteDto): Note {
  const note = new Note();
  note.title = dto.title;
  note.content = dto.content;
  return note;
}
