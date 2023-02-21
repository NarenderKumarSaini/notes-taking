import { Note } from '../entities/note.entity';

export class NoteDto {
  id: number;
  noteText: string;
}

export function toNote(dto: NoteDto): Note {
  const note = new Note();
  note.noteText = dto.noteText;
  return note;
}
